"use client";
import React, { useState, useRef } from "react";

export default function ImageUpload({ label, name }) {
  const [image, setImage] = useState(null);
 
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
     return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="mb-4 col-span-1">
      <label className="block font-semibold mb-2 text-gradient">{label}</label>
      <button
        type="button"
        onClick={handleButtonClick}
        className="w-full p-3 border border-transparent rounded-lg bg-gradient-to-r from-[#9b4dca] to-[#f782c3] text-white font-semibold hover:from-[#f782c3] hover:to-[#9b4dca] transition-colors duration-300"
      >
        Choose Image
      </button>
      <input
        ref={fileInputRef}
        id={name}
        name={name}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      {image && (
        <div className="mt-4 flex justify-center">
          <img
            src={image}
            alt="Selected"
            className="w-32 h-32 object-cover border border-gray-300 rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
