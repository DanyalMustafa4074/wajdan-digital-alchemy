
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

export function TestimonialCard ({ handleShuffle, testimonial, position, id, author }) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 100) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[400px] w-[300px] sm:h-[450px] sm:w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-4 sm:p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={`https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-24 w-24 sm:h-32 sm:w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-base sm:text-lg italic text-slate-400">"{testimonial}"</span>
      <span className="text-center text-sm font-medium text-indigo-400">{author}</span>
    </motion.div>
  );
};

function ShuffleCards({ testimonials }) {
  const [positions, setPositions] = React.useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
  };

  return (
    <div className="grid place-content-center overflow-hidden px-4 md:px-8 py-24 text-slate-50 min-h-[500px] sm:min-h-[600px] h-full w-full">
      <div className="relative -ml-[60px] sm:-ml-[100px] h-[400px] w-[300px] sm:h-[450px] sm:w-[350px] md:-ml-[175px]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffle}
            position={positions[index]}
          />
        ))}
      </div>
    </div>
  );
}

export { ShuffleCards }
