import { useState } from 'react';

const images = [
  { src: 'https://via.placeholder.com/400x300?text=Project+1', alt: 'Project 1' },
  { src: 'https://via.placeholder.com/400x300?text=Project+2', alt: 'Project 2' },
  { src: 'https://via.placeholder.com/400x300?text=Project+3', alt: 'Project 3' },
  { src: 'https://via.placeholder.com/400x300?text=Project+4', alt: 'Project 4' },
  { src: 'https://via.placeholder.com/400x300?text=Project+5', alt: 'Project 5' },
  { src: 'https://via.placeholder.com/400x300?text=Project+6', alt: 'Project 6' },
];

export default function ProjectsGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(null);

  const openModal = (img) => {
    setActiveImg(img);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setActiveImg(null);
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-electricBlue text-center">Projects Gallery</h2>
      {/* Gallery Grid with accessible alt tags */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" aria-label="Projects Gallery">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="glass shadow-subtle overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => openModal(img)}
            aria-label={`Open modal for ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-60 object-cover" />
          </div>
        ))}
      </div>
      {/* Lightbox Modal for image preview */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeModal} aria-label="Gallery Modal">
          <div className="relative bg-white rounded-xl p-4 max-w-lg w-full" onClick={e => e.stopPropagation()}>
            <img src={activeImg.src} alt={activeImg.alt} className="w-full h-auto rounded-lg" />
            <button className="absolute top-2 right-2 text-electricBlue text-xl font-bold" onClick={closeModal} aria-label="Close Modal">&times;</button>
          </div>
        </div>
      )}
    </section>
  );
}