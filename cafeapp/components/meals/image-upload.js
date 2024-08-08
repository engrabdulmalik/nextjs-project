// components/ImageUpload.js
// "use client";
// import React, { useState, forwardRef, useImperativeHandle } from "react";

// const ImageUpload = forwardRef((props, ref) => {
//   const [mealImage, setMealImage] = useState(null);

//   useImperativeHandle(ref, () => ({
//     getImage: () => mealImage,
//   }));

//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       setMealImage(e.target.files[0]);
//     }
//   };

//   return (
//     <div className="mb-4 col-span-1">
//       <label htmlFor="image" className="block font-semibold mb-2 text-gradient">
//         Upload Image
//       </label>
//       <input
//         id="image"
//         name="image"
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//         className="w-full p-2.5 border border-gray-300 rounded-lg bg-white"
//       />
//     </div>
//   );
// });

// export default ImageUpload;

export default function ImageUpload({label}) {
  return (
    <div className="mb-4 col-span-1">
      <label htmlFor="image" className="block font-semibold mb-2 text-gradient">
        {label}
      </label>
      <input
        id="image"
        name="image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full p-2.5 border border-gray-300 rounded-lg bg-white"
      />
    </div>
  );
}
