import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [email, setEmail] = useState("");
  const [user_id, setUser_id] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login");
  };

  const handleUserIDChange = (e) => {
    setUser_id(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!user_id ||!email ||!password ||!confirmPassword ||!userRole) {
      alert("Please fill in all fields.");
      return;
    }

    if (password!== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      
      // const response = await axios.post("https://backend-cdp.vercel.app/register", {
      const response = await axios.post("http://localhost:7000/register", {
        user_id,
        email,
        password,
        user_roles: parseInt(userRole),
      });
      localStorage.setItem("user_id", user_id);
      localStorage.setItem("user_role", userRole);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage("User ID already exists.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4 text-black">Register</h1>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userRole"
            >
              User Role:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userRole"
              value={userRole}
              onChange={handleRoleChange}
            >
              <option value="">Select User Role</option>
              <option value="1">CSO</option>
              <option value="2">Student</option>
              {/* <option value="3">Industry</option> */}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user_id"
            >
              User ID (eg: 20K-1234):
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user_id"
              type="text"
              placeholder="User ID"
              value={user_id}
              onChange={handleUserIDChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
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
                value={password}
                onChange={handlePasswordChange}
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type={showConfirmPassword? "text" : "password"}
                placeholder="******************"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <button
                  className="bg-gray-200 text-gray-700 focus:outline-none hover:bg-gray-300 rounded-full py-1 px-2"
                  type="button"
                  onClick={handleToggleConfirmPassword}
                >
                  {showConfirmPassword? (
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
              Register
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={redirectToLogin}
            >
              Already have an account?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
