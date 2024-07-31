"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { id: 1, image: "/assets/burger.jpg", alt: "Slide 1" },
  { id: 2, image: "/assets/curry.jpg", alt: "Slide 2" },
  { id: 3, image: "/assets/pizza.jpg", alt: "Slide 3" },
  { id: 4, image: "/assets/macncheese.jpg", alt: "Slide 4" },
  { id: 5, image: "/assets/tomato-salad.jpg", alt: "Slide 5" },
  { id: 6, image: "/assets/dumplings.jpg", alt: "Slide 6" },
  { id: 7, image: "/assets/schnitzel.jpg", alt: "Slide 7" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Column: Slideshow */}
      <div className="flex-1 relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full h-full flex-shrink-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0} // Prioritize the first image for better LCP
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Existing Content */}
      <div className="flex-1 px-6 pt-10 lg:px-8 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ff80b5] to-[#9089fc] sm:text-6xl">
            Hakuna Matata: Where Every Meal is a Worry-Free Delight!
          </h1>
          <p className="mt-6 text-lg leading-8 bg-clip-text text-transparent bg-gradient-to-r from-[#ff80b5] to-[#9089fc]">
            Dive into our delightful menu, crafted to bring you joy and comfort
            with every bite. Enjoy great food and even better vibes!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/meals"
              className="rounded-md bg-gradient-to-r from-[#ff80b5] to-[#9089fc] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-[#ff60a8] hover:to-[#7b4fd0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Explore Meals
            </Link>
            <Link
              href="/community"
              className="text-sm font-semibold leading-6 bg-gradient-to-r from-[#ff80b5] to-[#9089fc] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-[#ff60a8] hover:to-[#7b4fd0]"
            >
              Join the Community <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
