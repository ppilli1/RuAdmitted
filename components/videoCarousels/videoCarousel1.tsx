import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CampusInfo = () => {
  const campusInfo = [
    {
      image: '/images/campuses/campus1.jpg',
      title: 'Livingston Campus',
      link: 'https://www.youtube.com/watch?v=EXzCJ2sMs7k&pp=ygUWbGl2aW5nc3RvbiBjYW1wdXMgdG91cg%3D%3D',
    },
    {
      image: '/images/campuses/campus2.jpg',
      title: 'Busch Campus',
      link: 'https://www.youtube.com/watch?v=J7GGmn7RAzY&pp=ygURYnVzY2ggY2FtcHVzIHRvdXI%3D',
    },
    {
      image: '/images/campuses/campus3.jpg',
      title: 'College Avenue Campus',
      link: 'https://www.youtube.com/watch?v=Kxmg6UfGV4E&pp=ygUXY29sbGVnZSBhdmUgY2FtcHVzIHRvdXI%3D',
    },
    {
      image: '/images/campuses/campus4.jpg',
      title: 'Cook/Douglass Campus',
      link: 'https://www.youtube.com/watch?v=CO8ThnkGP_w&pp=ygUZY29vay9kb3VnbGFzcyBjYW1wdXMgdG91cg%3D%3D',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCircleClick = (index: number) => {
    setActiveSlide(index);

    if (containerRef.current) {
      const slideWidth = containerRef.current.clientWidth / campusInfo.length;
      containerRef.current.scrollLeft = index * slideWidth;
    }
  };

  return (
    <motion.div
      className="relative w-[500px] mx-auto mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="relative w-[500px] flex absolute right-50">
        <div className="w-[500px]" ref={containerRef}>
          {campusInfo.map((campus, index) => (
            <div
              key={index}
              className={`w-full ${index === activeSlide ? '' : 'hidden'}`}
            >
              <a href={campus.link} target="_blank" rel="noopener noreferrer">
                <Image src={campus.image} alt={campus.title} width={500} height={300} />
              </a>
              <div className="absolute bottom-0 left-0 w-[500px] bg-black bg-opacity-40 p-4">
                <p className="text-white">{campus.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-[500px] h-16 mx-auto mt-2 flex items-center justify-center absolute right-0">
        <div className="flex space-x-2">
          {campusInfo.map((_, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full bg-${
                index === activeSlide ? 'bg-red-500' : 'bg-gray-500'
              } border border-gray-300 cursor-pointer`}
              onClick={() => handleCircleClick(index)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CampusInfo;
