import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message
  const navigate = useNavigate();

  const redirectToRegister = () => {
    navigate("/register");
  };

  const redirectToJobs = () => {
    navigate("/home");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
     ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.user_id ||!formData.password) {
      alert("Please fill in both User ID and Password.");
      return;
    }

    try {
      
      // const response = await axios.post("https://backend-cdp.vercel.app/login", {
      const response = await axios.post("http://localhost:7000/login", {
        user_id: formData.user_id,
        password: formData.password,
      });
      const { token, user_id, user_roles } = response.data;
      if (token && user_id) {
        try {
          localStorage.setItem("token", token);
          localStorage.setItem("user_roles", user_roles);
          localStorage.setItem("user_id", user_id);
        } catch (error) {
          console.error("Error setting item in local storage:", error);
        }
        redirectToJobs();
      } else {
        console.error("Token or user_id is undefined");
      }
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage("Invalid User ID or Password.");
    }
  };

  useEffect(() => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing local storage:", error);
    }
  }, []);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4 text-black">Login</h1>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user_id"
            >
              User ID:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user_id"
              type="text"
              placeholder="User ID"
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword? "text" : "password"}
                placeholder="******************"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <button
                  className="bg-gray-200 text-gray-700 focus:outline-none hover:bg-gray-300 rounded-full py-1 px-2"
                  type="button"
                  onClick={handleTogglePassword}
                >
                  {showPassword? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>
              </div>
            </div>
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={redirectToRegister}
            >
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
