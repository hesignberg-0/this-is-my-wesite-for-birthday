
import React from 'react';

const photos = [
  // The src is no longer used, but the captions are still important for the hover effect.
  { src: '/img/pic1.jpg', caption: "My Miss World 💖" },
  { src: '/img/pic2.jpg', caption: "Meri Bubu 😍" },
  { src: '/img/pic3.jpg', caption: "My Ladlli 👑" },
  { src: '/img/pic4.jpg', caption: "My sweet girl 🥰" },
  { src: '/img/pic5.jpg', caption: "Meri kuchupuchu ✨" },
  { src: '/img/pic6.jpg', caption: "My sanu ❤️" },
];

const PhotoGallery: React.FC = () => {
  return (
    <section id="gallery" className="my-16">
      {/* Heading is removed as requested */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            {/* Image is replaced with a styled placeholder showing "Annie" */}
            <div className="w-full h-64 bg-rose-200 flex items-center justify-center">
              <span className="font-cursive text-5xl text-rose-800 select-none">Annie</span>
            </div>
            
            {/* The hover effect to show the caption is preserved */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-xl font-semibold font-cursive tracking-wider text-center px-2">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
