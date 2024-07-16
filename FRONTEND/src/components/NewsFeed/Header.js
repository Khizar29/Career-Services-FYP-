import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Header() {

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
    <header>
      <Link to="/newsfeed" className="text-2xl font-bold">CDP NEWSFEED</Link>
      <nav className="ml-4">
      {localStorage.getItem('user_roles') === "1" && (
        <Link to="/newsfeed/createPost" className="bg-blue-500 hover:bg-blue-700 !text-white font-semibold py-2 px-4 rounded transition duration-150 ease-in-out">
          Create Post
        </Link>
      )}
      </nav>
    </header>
  );
}
