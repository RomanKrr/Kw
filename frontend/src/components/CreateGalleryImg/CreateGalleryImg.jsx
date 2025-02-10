import React, { useState } from 'react'
import { useGalleryStore } from '../../store/useGalleryStore';

import { CiTrash } from "react-icons/ci";


const CreateGalleryImg = () => {
    const { loading, createGalleryImage } = useGalleryStore();

    const [formData, setFormData] = useState({
        images: [],
    });

    const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files);
        const newImages = [];

        for (const file of files) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            await new Promise((resolve) => {
                reader.onload = () => {
                    newImages.push(reader.result);
                    resolve();
                };
            });
        }

        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ...newImages],
        }));
    };

    const removeImage = (index) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createGalleryImage(formData);
        setFormData({
            images: [],
        });
    };

    return (
        <div className="form_container">
            <h2>Create Gallery Image</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Add images(min: 3):
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        multiple
                    />
                </label>

                <div className="image-list">
                    {formData.images.map((image, index) => (
                        <div className="choose_container" key={index}>
                            <div className="c">
                                <img src={image} alt="Selected" className="choosen_image" />
                                <CiTrash className='delete_image' onClick={() => removeImage(index)} />
                            </div>
                        </div>
                    ))}
                </div>
                <button type="submit">Create product</button>
            </form>
            {loading && <div className="alert_wrapper">
                <p className='load'>loading...</p>
            </div>}
        </div>
    )
}

export default CreateGalleryImg