'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '@/firebaseConfig'; // Adjust the path if needed
import { getAuth } from 'firebase/auth';
import { Engagement } from 'next/font/google';

const FileUploadModal = () => {
    const [uploading, setUploading] = useState(false);
    const [fileUploadValue, setFileUploadValue] = useState({
        fileName: "",
        category: "",
        file: null
    });
    const time = new Date()
    const hrs = time.getHours()
    const min = time.getMinutes()
    const date = new Date().toLocaleDateString('en-US',{
      year: 'numeric',
      month: "long",
      day: "numeric"
    })
   

    const handleButtonClick = () => {
        document.getElementById('imageUpload').click();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFileUploadValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          if (file.size > 5 * 1024 * 1024) { // Example: 5 MB limit
            alert('File size exceeds 5 MB');
            return;
          }
          if (!['image/jpeg', 'image/png'].includes(file.type)) {
            alert('Only JPEG and PNG files are allowed');
            return;
          }
          setFileUploadValue(prevState => ({
            ...prevState,
            file: file
          }));

          if (!fileUploadValue.category) {
            alert("Select a category")
          }
        }
      };
      

      const handleSubmit = async () => {
        if (!fileUploadValue.file) {
          alert('Please choose a file');
          return;
        }
        const auth = getAuth();
        const user = auth.currentUser;
      
        if (!user) {
          alert('You must be logged in to upload files.');
          return;
        }
      
        try {
          setUploading(true);
          const storageRef = ref(storage, `images/${fileUploadValue.file.name}`);
          
          // Upload the file
          await uploadBytes(storageRef, fileUploadValue.file);
          
          // Retrieve the file URL
          const downloadedURL = await getDownloadURL(storageRef);
      
          // Save metadata to Firestore
          await addDoc(collection(db, 'images'), {
            url: downloadedURL,
            name: fileUploadValue.fileName,
            category: fileUploadValue.category,
            userId: user.uid, // Optionally save the user ID
            engagment:{views:0,like:0, love:0},
            Date:  date,
            time: `${hrs}:${min} ${hrs >= 12? "PM":"AM"}`
          });
      
          alert('File uploaded and metadata saved!');
          setFileUploadValue({ fileName: "", category: "", file: null });
        } catch (error) {
          console.error('Error submitting the file:', error.message);
          alert('Error submitting the file: ' + error.message);
        } finally {
          setUploading(false);
        }
      };
      


    return (
        <div className='flex flex-col justify-center items-center gap-4 p-4'>
            {/* Text Input */}
            <label htmlFor="textInput" className='text-lg font-medium'>Enter Text:</label>
            <input 
                type="text" 
                id="textInput" 
                name='fileName'
                className='border border-gray-300 p-3 rounded placeholder:font-poppins' 
                placeholder='Enter Your Image Name'
                onChange={handleInputChange}
                value={fileUploadValue.fileName}
            />
            
            {/* Select Input */}
            <label htmlFor="categorySelect" className='text-lg font-medium font-poppins'>Select Category:</label>
            <select
                id="categorySelect"
                className='border border-gray-300 p-3 rounded'
                name='category'
                value={fileUploadValue.category}
                onChange={handleInputChange}
            >
                <option value="">Select a category</option>
                <option value="family">Family</option>
                <option value="portrait">Portrait</option>
                <option value="photoShoot">Photo Shoot</option>
                <option value="weddings">Weddings</option>
                <option value="event-coverage">Event Coverage</option>
            </select>

            {/* File Upload */}
            <label htmlFor="imageUpload" className='text-lg font-medium font-poppins'>Upload Image:</label>
            <div className='relative'>
                <input
                    type="file"
                    name="file"
                    id="imageUpload"
                    className='sr-only'
                    onChange={handleFileChange}
                />
                <button
                    type="button"
                    className='flex items-center bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none'
                    onClick={handleButtonClick}
                    aria-label="Upload an image"
                >
                    <FontAwesomeIcon icon={faUpload} className='h-5 w-5 mr-2' />
                    Choose File
                </button>
            </div>

            {/* Submit Button */}
            <button
                type="button"
                className='bg-green-500 text-white p-3 rounded hover:bg-green-600 focus:outline-none mt-4'
                onClick={handleSubmit}
            >
               {uploading ? 'Uploading...' : 'Submit'}
            </button>
        </div>
    );
};

export default FileUploadModal;
