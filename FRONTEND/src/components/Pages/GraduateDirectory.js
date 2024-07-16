import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GraduateDirectory = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:7000/profile");
        // const response = await axios.get("https://backend-cdp.vercel.app/profile");
        
        if (Array.isArray(response.data)) {
          setProfiles(response.data);
          setFilteredProfiles(response.data); // Initialize filteredProfiles with all profiles
        } else {
          console.error("Invalid data format received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  // Filtering function
  const filterProfiles = () => {
    const filtered = profiles.filter(profile => {
      // Match searchQuery against profile attributes
      const searchLowerCase = searchQuery.toLowerCase();
      return (
        (profile.fname && profile.fname.toLowerCase().includes(searchLowerCase)) ||
        (profile.lname && profile.lname.toLowerCase().includes(searchLowerCase)) ||
        (profile.user_id && profile.user_id.toString().includes(searchLowerCase)) ||
        (profile.discipline && profile.discipline.toLowerCase().includes(searchLowerCase)) ||
        (profile.year_of_graduation && profile.year_of_graduation.toString().includes(searchLowerCase))
      );
    });
    setFilteredProfiles(filtered);
  };

  // Update filteredProfiles when searchQuery changes
  useEffect(() => {
    filterProfiles();
  }, [searchQuery, profiles]);

  // Handle search button click
  const handleSearch = () => {
    filterProfiles();
  };

  return (
    <div>
      <div className="search-container max-w-md mx-auto flex items-center">
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none mt-2"
        />
        <button
          onClick={handleSearch}
          className="search-button ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none mt-2"
        >
          Search
        </button>
      </div>

      {/* Display filtered profiles */}
      <div className="flex flex-wrap justify-center p-4">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <div key={profile.user_id} className="m-4">
              <Link to={`/profile/${profile.user_id}`} className="block">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full h-48 object-cover"
                    src={profile.student_profile_pic || "https://via.placeholder.com/300"}
                    alt={`${profile.fname} ${profile.lname}`}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {profile.fname} {profile.lname}
                    </div>
                    <p className="text-gray-700 text-base">
                      Roll No: {profile.user_id}<br />
                      Discipline: {profile.discipline}<br />
                      Year of Graduation: {profile.year_of_graduation}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No profiles found</p>
        )}
      </div>
    </div>
  );
};

export default GraduateDirectory;
