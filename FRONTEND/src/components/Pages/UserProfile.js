//UserProfile.js frontend
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const fileInputRef = useRef(null); // Define fileInputRef using useRef
  const [profilePic, setProfilePic] = useState(null); // New state for profile picture
  const [profileData, setProfileData] = useState({
    user_id: localStorage.getItem("user_id"),
    fname: "",
    lname: "",
    contact: "",
    discipline: "",
    year_of_graduation: "",
    cgpa: "",
    tagline: "",
    personal_statement: "",
    certificates: [""],
    experiences: [""],
    profiles: [],
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user_id = localStorage.getItem("user_id");
        if (!user_id) {
          throw new Error("User ID not found in local storage");
        }

        const response = await axios.get(
          `http://localhost:7000/profile/${user_id}`
          // `https://backend-cdp.vercel.app/profile/${user_id}`
          
        );
        const { profile, certificates, experiences } = response.data;

        setProfileData((prevData) => ({
          ...prevData,
          ...profile,
          certificates: certificates.map((cert) => cert.certificate),
          experiences: experiences.map((exp) => exp.experience),
        }));
        console.log(profileData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleEditClick = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("user_id", profileData.user_id);
      formData.append("fname", profileData.fname);
      formData.append("lname", profileData.lname);
      formData.append("contact", profileData.contact);
      formData.append("discipline", profileData.discipline);
      formData.append("year_of_graduation", profileData.year_of_graduation);
      formData.append("cgpa", profileData.cgpa);
      formData.append("tagline", profileData.tagline);
      formData.append("personal_statement", profileData.personal_statement);
      formData.append("certificates", JSON.stringify(profileData.certificates)); // Convert to JSON string
      formData.append("experiences", JSON.stringify(profileData.experiences)); // Convert to JSON string
      formData.append("profiles", JSON.stringify(profileData.profiles)); // Convert to JSON string
      formData.append("profilePic", profilePic); // Append profile picture
  
      const response = await axios.post(
        "http://localhost:7000/profile",
        // "https://backend-cdp.vercel.app/profile",
        
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      handleSave();
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCertificate = () => {
    setProfileData((prevData) => ({
      ...prevData,
      certificates: [...prevData.certificates, ""],
    }));
  };

  const handleAddExperience = () => {
    setProfileData((prevData) => ({
      ...prevData,
      experiences: [...prevData.experiences, ""],
    }));
  };
  const handleImageButtonClick = () => {
    fileInputRef.current.click();
  };
  
  const handleChangeCertificate = (index, value) => {
    setProfileData((prevData) => {
      const updatedCertificates = [...prevData.certificates];
      updatedCertificates[index] = value;
      return {
        ...prevData,
        certificates: updatedCertificates,
      };
    });
  };

  const handleChangeExperience = (index, value) => {
    setProfileData((prevData) => {
      const updatedExperiences = [...prevData.experiences];
      updatedExperiences[index] = value;
      return {
        ...prevData,
        experiences: updatedExperiences,
      };
    });
  };

  const handleSave = () => {
    console.log("Profile data saved:", profileData);
    setEditMode(false);
  };

  return (
    <div className="justify-center bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <main className="shadow-md mt-4 mb-4 rounded-md w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4 ">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">
              Public Profile
            </h2>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                  src={
                    profileData.student_profile_pic
                      ? profileData.student_profile_pic
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt="Bordered avatar"
                />

                <div className="flex flex-col space-y-5 sm:ml-8">
                  <button
                    type="button"
                    onClick={handleEditClick}
                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                  >
                    {editMode ? "Cancel" : "Edit"}
                  </button>
                  <button
                    type="button"
                    onClick={handleImageButtonClick} //undefined
                    className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                  >
                    Change Picture
                  </button>
                  {/* Hidden file input */}
                  <input
                    type="file"
                    ref={fileInputRef} //undefined
                    style={{ display: "none" }}
                    onChange={handleImageChange} //undefined
                  />
                </div>
              </div>

              <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div className="w-full">
                      <label
                        htmlFor="fname"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                      >
                        Your first name
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        value={profileData.fname}
                        onChange={handleChange}
                        disabled={!editMode}
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="Your first name"
                        // required
                      />
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="lname"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                      >
                        Your last name
                      </label>
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        value={profileData.lname}
                        onChange={handleChange}
                        disabled={!editMode}
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="Your last name"
                        // required
                      />
                    </div>
                  </div>

                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="contact"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                    >
                      Contact
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      value={profileData.contact}
                      onChange={handleChange}
                      disabled={!editMode}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your contact"
                      // required
                    />
                  </div>

                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="discipline"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                    >
                      Discipline
                    </label>
                    <input
                      type="text"
                      id="discipline"
                      name="discipline"
                      value={profileData.discipline}
                      onChange={handleChange}
                      disabled={!editMode}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your discipline"
                      // required
                    />
                  </div>

                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="year_of_graduation"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                    >
                      Year of Graduation
                    </label>
                    <input
                      type="text"
                      id="year_of_graduation"
                      name="year_of_graduation"
                      value={profileData.year_of_graduation}
                      onChange={handleChange}
                      disabled={!editMode}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your graduation year"
                      // required
                    />
                  </div>

                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="cgpa"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                    >
                      CGPA
                    </label>
                    <input
                      type="number"
                      id="cgpa"
                      name="cgpa"
                      value={profileData.cgpa}
                      onChange={handleChange}
                      disabled={!editMode}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your CGPA"
                      // required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="tagline"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                    >
                      Tagline
                    </label>
                    <input
                      type="text"
                      id="tagline"
                      name="tagline"
                      value={profileData.tagline}
                      onChange={handleChange}
                      disabled={!editMode}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your tagline"
                      // required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="personal_statement"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                    >
                      Personal Statement
                    </label>
                    <textarea
                      id="personal_statement"
                      name="personal_statement"
                      value={profileData.personal_statement}
                      onChange={handleChange}
                      disabled={!editMode}
                      className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Write your personal statement here..."
                      // required
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="certificates"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                    >
                      Certificates
                    </label>
                    {profileData.certificates.map((certificate, index) => (
                      <input
                        key={index}
                        type="text"
                        value={certificate}
                        onChange={(e) =>
                          handleChangeCertificate(index, e.target.value)
                        }
                        disabled={!editMode}
                        className="mb-2 bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="Certificate"
                      />
                    ))}
                    {editMode && (
                      <button
                        type="button"
                        onClick={handleAddCertificate}
                        className="mt-2 bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      >
                        Add Certificate
                      </button>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="experiences"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                    >
                      Experiences
                    </label>
                    {profileData.experiences.map((experience, index) => (
                      <input
                        key={index}
                        type="text"
                        value={experience}
                        onChange={(e) =>
                          handleChangeExperience(index, e.target.value)
                        }
                        disabled={!editMode}
                        className="mb-2 bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="Experience"
                      />
                    ))}
                    {editMode && (
                      <button
                        type="button"
                        onClick={handleAddExperience}
                        className="mt-2 bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      >
                        Add Experience
                      </button>
                    )}
                  </div>

                  {editMode && (
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                      >
                        Save
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
