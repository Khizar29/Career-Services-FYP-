import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Card from "../Card";

export const BoardOfDirectors = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a token exists in local storage
    const token = localStorage.getItem("token");
    if (!token) {
      // If no token is found, redirect to the "NotFound" page
      navigate("/NotFound");
    }
  }, [navigate]);

  //content here needs to be statically insterted
  const directors = [
    { name: "Aysha Siddiqui", designation: "Manager", campus: "Karachi" },
  ];

  return (
    <div>
      <h1 className="text-gray-800 text-3xl font-bold mb-6 text-center">
        Career Services Office
      </h1>
      <div className="flex flex-wrap justify-center">
        {directors.map((director, index) => (
          <Card
            key={index}
            name={director.name}
            designation={director.designation}
            campus={director.campus}
          />
        ))}
      </div>
      <div style={{ flex: 1 }}></div> {/* Add a flex spacer to push content to the top */}
    </div>
  );
};