import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/photos/before-after-1.jpg",
    alt: "Veneer transformation - Before and After",
  },
  {
    src: "/photos/before-after-2.jpg",
    alt: "Smile makeover - Before and After",
  },
  {
    src: "/photos/before-after-3.jpg",
    alt: "Hollywood smile transformation",
  },
  {
    src: "/photos/smile-result.jpg",
    alt: "Perfect smile result",
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  if (galleryImages.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const currentImage = galleryImages[currentIndex];

  return (
    <section ref={ref} id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="luxury-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="luxury-badge mb-4">Transformations</span>
          <h2 className="section-title text-foreground mt-4">
            Before & <span className="gold-gradient-text">After</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Witness the remarkable transformations created at Dr Alaa El Cheikh.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-luxury">
            {currentImage && (
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full aspect-[4/3] object-cover"
              />
            )}
          </div>

          {/* Arrows */}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ivory/90">
            <ChevronLeft />
          </button>

          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ivory/90">
            <ChevronRight />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-gold w-8" : "bg-gold/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
