import React, { useRef, useEffect } from "react";
import heroVideo from "../assets/videos/hero_bg.MP4";

export const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          Experience seamless translations and global reach.
        </p>
      </div>
    </section>
  );
};
