import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image1 from "../../Images/FAST PIC 1.jpg";
import image2 from "../../Images/FAST PIC 2.jpg";
import image3 from "../../Images/FAST PIC 3.jpg";

import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a token exists in local storage
    const token = localStorage.getItem("token");
    if (!token) {
      // If no token is found, redirect to the "NotFound" page
      navigate("/NotFound");
    }
  }, [navigate]);

  return (
    <>
      <div className="container mx-auto px-2 mt-10">
        <Carousel showThumbs={false} showStatus={false} showIndicators={false} showArrows={true} autoPlay={true} interval={2000} infiniteLoop={true}>
          <div>
            <img src={image1} alt="Slide 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-xl font-normal text-white text-center typewriter-text">Delivering opportunities to students.</p>
            </div>
          </div>
          <div>
            <img src={image2} alt="Slide 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-xl font-normal text-white text-center typewriter-text">Bridging the gap between industry and academia.</p>
            </div>
          </div>
          <div>
            <img src={image3} alt="Slide 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-xl font-normal text-white text-center typewriter-text">Introducing the alumni directory.</p>
            </div>
          </div>
        </Carousel>

        <div className="covertext mt-24">
          <div className="mx-auto max-w-xl px-4">
            <h1 className="text-6xl font-semibold text-black text-center mb-4">FAST NUCES</h1>
            <h1 className="text-6xl font-semibold text-black text-center mb-4">Career and Development Portal</h1>
            <h3 className="text-xl font-normal text-black text-center typewriter-text">Find your dream job with us.</h3>
          </div>
          <div className="text-center mt-8">
            <a href="/jobs" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-bold hover:bg-blue-600 transition duration-300">
              FIND JOBS
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
