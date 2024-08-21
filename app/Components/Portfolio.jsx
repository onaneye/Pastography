'use client';
import React, { useState, useCallback, useEffect } from 'react';
import Modal from './Modal'; // Import the modal component
import { galleryCategory } from './constant'; // Ensure this is defined
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { collection, getDocs, updateDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth';

const Portfolio = () => {
  const [loading, setLoading] = useState(false);
  const [batchSize] = useState(6);
  const [images, setImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);
  const [categoryActive, setCategoryActive] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [engagement, setEngagement] = useState({});
  
  // Simulated user ID
  const userId = 'user123'; 

  // Filter images based on category
  const filteredItems = categoryActive === 'All'
    ? loadedImages
    : loadedImages.filter(item => item.category === categoryActive);

  const loadMore = useCallback(() => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const nextBatch = images.slice(loadedImages.length, loadedImages.length + batchSize);
      setLoadedImages(prev => [...prev, ...nextBatch]);
      setLoading(false);
    }, 2000);
  }, [loading, images, loadedImages, batchSize]);

  const handleEngagementButton = async (id, type) => {
    const userEngagements = JSON.parse(localStorage.getItem('userEngagements')) || {};
    
    // Check if the user has already engaged with this image
    if (userEngagements[userId]?.[id]?.includes(type)) {
      console.log('Already engaged');
      return;
    }

    // Update local storage
    const updatedEngagements = {
      ...userEngagements,
      [userId]: {
        ...userEngagements[userId],
        [id]: [...(userEngagements[userId]?.[id] || []), type]
      }
    };
    localStorage.setItem('userEngagements', JSON.stringify(updatedEngagements));

    // Update state
    setEngagement(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [type]: (prevState[id]?.[type] || 0) + 1
      }
    }));

    // Optionally, update Firestore
    try {
      const imageDocRef = doc(db, 'images', id);
      await updateDoc(imageDocRef, {
        [`engagement.${type}`]: (prevState[id]?.[type] || 0) + 1
      });
    } catch (error) {
      console.error("Error updating engagement:", error);
    }
  };

  const handleImageClick = (item) => {
    handleEngagementButton(item.id, 'view');
    setSelectedImage(item);
  };

  useEffect(() => {
    const fetchImagesData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'images'));
        const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setImages(documents);
        setLoadedImages(documents.slice(0, batchSize)); // Initialize with first batch

        // Initialize engagement state from Firestore or localStorage
        const localEngagements = JSON.parse(localStorage.getItem('userEngagements')) || {};
        setEngagement(documents.reduce((acc, doc) => {
          acc[doc.id] = doc.engagement || {};
          return acc;
        }, {}));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImagesData();
  }, [batchSize]);

  return (
    <div className="p-4">
      <h3 className="text-md text-green-500 font-medium uppercase text-center font-poppins mt-[10%]">Our Gallery</h3>
      <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold capitalize text-gray-700 text-center mb-12 font-poppins'>
        Our Works Speak
      </h1>
      <ul className='flex flex-row flex-shrink justify-center items-center my-2 p-3 space-x-2 lg:space-x-12'>
        <li
          onClick={() => setCategoryActive('All')}
          className={`text-md bg-gray-200 shadow-lg rounded-md px-3 py-2 cursor-pointer transition-all ease-in ${categoryActive === 'All' ? 'bg-orange-500 text-white' : 'text-green-500 hover:bg-orange-500 hover:text-white'}`}
        >
          All
        </li>
        {galleryCategory.map((item) => (
          <li
            key={item}
            onClick={() => setCategoryActive(item)}
            className={`text-md bg-gray-200 shadow-lg rounded-md px-3 py-2 cursor-pointer transition-all ease-in ${categoryActive === item ? 'bg-orange-500 text-white' : 'text-green-500 hover:bg-orange-500 hover:text-white'}`}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-lg overflow-hidden">
            <img 
              src={item.url} 
              alt={item.title || 'Gallery image'} 
              className="w-full h-[450px] object-cover object-top-12 rounded-md mb-7 hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer" 
              onClick={() => handleImageClick(item)}
              onError={(e) => e.target.src = '/path/to/default-image.jpg'} // Fallback image
            />
            <div className='image-information flex justify-between my-3'>
              <h2 className="text-sm font-bold uppercase">{item.name}</h2>
              <div className='gallery-icons flex space-x-2'>
                <span className='text-orange-600 font-poppins text-lg cursor-pointer'>
                  <FontAwesomeIcon icon={faEye} size="lg"/> {engagement[item.id]?.view || 0}
                </span>
                <span 
                  className='text-orange-600 font-poppins text-lg cursor-pointer'
                  onClick={() => handleEngagementButton(item.id, 'love')}
                >
                  <FontAwesomeIcon icon={faHeart} size="lg"/> {engagement[item.id]?.love || 0}
                </span>
                <span 
                  className='text-orange-600 font-poppins text-lg cursor-pointer'
                  onClick={() => handleEngagementButton(item.id, 'like')}
                >
                  <FontAwesomeIcon icon={faThumbsUp} size="lg"/> {engagement[item.id]?.like || 0}
                </span>
              </div>
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
}

export default Portfolio;
