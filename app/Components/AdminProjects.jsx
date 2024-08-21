'use client';
import Modal from './Modal';
import { useState, useCallback, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const AdminProjects = () => {
    const [loading, setLoading] = useState(false);
    const [batchSize] = useState(6);
    const [images, setImages] = useState([]);
    const [loadedImages, setLoadedImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [engagement, setEngagement] = useState({});

    const filteredItems = loadedImages;

    const loadMore = useCallback(() => {
        if (loading) return;
        setLoading(true);

        setTimeout(() => {
            const nextBatch = images.slice(loadedImages.length, loadedImages.length + batchSize);
            setLoadedImages(prev => [...prev, ...nextBatch]);
            setLoading(false);
        }, 2000);
    }, [loading, images, loadedImages, batchSize]);

    const handleEngagementButton = (id, type) => {
        setEngagement(prevState => ({
            ...prevState,
            [id]: {
                ...prevState[id],
                [type]: (prevState[id]?.[type] || 0) + 1
            }
        }));
    };

    const handleImageClick = (item) => {
        handleEngagementButton(item.id, 'view');
        setSelectedImage(item);
    };

    const fetchImagesData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'images'));
            const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setImages(documents);
            setLoadedImages(documents.slice(0, batchSize)); // Initialize with the first batch
        } catch (error) {
            console.error("Error fetching images data:", error);
        }
    };

    const deleteImage = async (id) => {
        try {
            await deleteDoc(doc(db, 'images', id));
            setImages(prev => prev.filter(dc => dc.id !== id));
            setLoadedImages(prev => prev.filter(dc => dc.id !== id));
            setSelectedImage(null); // Close modal if the deleted image was selected
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };

    useEffect(() => {
        fetchImagesData();
    }, []);

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                    <div key={item.id} className="bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden">
                        <img 
                            src={item.url} 
                            alt={item.title} 
                            className="w-full h-[450px] object-cover object-top-12 rounded-md mb-7 hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer" 
                            onClick={() => handleImageClick(item)}
                            onError={(e) => e.target.src = '/path/to/default-image.jpg'} // Fallback image
                        />
                        <div className='image-information flex justify-between my-3'>
                            <h2 className="text-lg font-bold text-white uppercase">{item.name}</h2>
                            <div className='gallery-icons flex space-x-2'>
                                <span className='text-orange-600 font-poppins text-lg cursor-pointer'>
                                    <FontAwesomeIcon icon={faEye} size={2}/> {engagement[item.id]?.view || 0}
                                </span>
                                <span 
                                    className='text-orange-600 font-poppins text-lg cursor-pointer'
                                    onClick={() => handleEngagementButton(item.id, 'love')}
                                >
                                    <FontAwesomeIcon icon={faHeart} size={2}/> {engagement[item.id]?.love || 0}
                                </span>
                                <span 
                                    className='text-orange-600 font-poppins text-lg cursor-pointer'
                                    onClick={() => handleEngagementButton(item.id, 'like')}
                                >
                                    <FontAwesomeIcon icon={faThumbsUp} size={2}/> {engagement[item.id]?.like || 0}
                                </span>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <button 
                                className='bg-red-600 px-4 py-2 rounded-md text-white' 
                                onClick={() => deleteImage(item.id)}
                            >
                                Delete
                            </button>
                            <button className='bg-green-600 px-4 py-2 rounded-md text-white'>
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
                {loadedImages.length < images.length && (
                    <button
                        onClick={loadMore}
                        className={`py-2 px-4 mx-auto ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500'} text-white rounded-md transition-colors duration-300`}
                        disabled={loading}
                    >
                        {loading ? "Loading images..." : "Load More"}
                    </button>
                )}
            </div>
            {selectedImage && (
                <Modal 
                    isOpen={!!selectedImage} 
                    onClose={() => setSelectedImage(null)} 
                    image={selectedImage} 
                />
            )}
        </div>
    );
};

export default AdminProjects;
