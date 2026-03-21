import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgOne from "../assets/imgOne.png";
import imgTwo from "../assets/imgTwo.png";
import imgThree from "../assets/imgThree.png";
import imgFour from "../assets/imgFour.png";
import imgFive from "../assets/imgFive.png";

const images = [imgOne, imgTwo, imgThree, imgFour, imgFive];
const VISIBLE = 3;

const ImageCardStack = () => {
  const [topIndex, setTopIndex] = useState(() => Math.floor(Math.random() * images.length));
  const [exitDir, setExitDir] = useState("right");

  const handleDragEnd = (_, info) => {
    if (Math.abs(info.offset.x) > 100) {
      setExitDir(info.offset.x > 0 ? "right" : "left");
      setTopIndex((prev) => (prev + 1) % images.length);
    }
  };

  const visibleCards = Array.from({ length: VISIBLE }, (_, stackPos) => {
    const imgIndex = (topIndex + stackPos) % images.length;
    return { id: imgIndex, src: images[imgIndex], stackPos };
  });

  return (
    <div className="relative w-72 h-96 mx-auto">
      <AnimatePresence>
        {visibleCards.map(({ id, src, stackPos }) => {
          const isTop = stackPos === 0;
          const scale = 1 - stackPos * 0.05;
          const y = stackPos * 14;
          const opacity = 1 - stackPos * 0.15;

          return (
            <motion.div
              key={id}
              className="absolute inset-0 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
              style={{ zIndex: VISIBLE - stackPos }}
              initial={{ scale, y, opacity }}
              animate={{ scale, y, opacity, x: 0, rotate: 0 }}
              exit={{
                x: exitDir === "right" ? 350 : -350,
                opacity: 0,
                rotate: exitDir === "right" ? 20 : -20,
                transition: { duration: 0.25 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={isTop ? handleDragEnd : undefined}
              whileDrag={{ scale: 1.03 }}
            >
              <img
                src={src}
                alt={`Moment ${id + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {isTop && (
                <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm font-medium">
                  ← Swipe to see more →
                </div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ImageCardStack;