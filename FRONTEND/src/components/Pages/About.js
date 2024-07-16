import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const About = () => {
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
    <div className="bg-[#c7ecfc] min-h-screen flex flex-col justify-center items-center px-4 py-8">
      <div className="max-w-3xl bg-white rounded-lg overflow-hidden shadow-xl p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          About Us
        </h1>
        <div className="text-gray-700">
          <p className="mb-6">
            Welcome to the Career Services and Industrial Liaison Office Portal
            of FAST National University Karachi, your trusted gateway to career
            success! Here, we are passionate about connecting talented
            individuals with their dream careers and empowering organizations
            to find the perfect fit for their teams.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is simple: to bridge the gap between job seekers and
            employers, fostering mutually beneficial connections that lead to
            personal and professional growth. We're committed to helping job
            seekers find meaningful employment opportunities that align with
            their skills, goals, and values.
          </p>

          <h2 className="text-2xl font-semibold mb-4">How We Help</h2>
          <p className="mb-6">
            Simultaneously, we assist employers in identifying top talent to
            drive their businesses forward. Whether you're taking the first
            step on your career journey or looking to take it to the next
            level, FAST National University Career Services and Industrial
            Liaison Office is here to support you every step of the way.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Partner with Us</h2>
          <p className="mb-6">
            Thank you for choosing us as your partner in career growth. We look
            forward to helping you achieve your aspirations and connect you
            with the opportunities that will shape your future.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="mb-6">
            Ready to embark on your career journey with us?{" "}
            <span className="text-blue-500">[Sign Up / Log In]</span> today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
