import React, { useEffect ,useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const { user_id } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // If no token is found, redirect to the "NotFound" page
      navigate("/NotFound");
    }
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/profile/${user_id}`);
        // const response = await axios.get(`https://backend-cdp.vercel.app/profile/${user_id}`);
        
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [user_id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl w-full">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Public Profile
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            View details about the user.
          </p>
        </div>
        <div className="mt-10">
          <div className="md:grid md:grid-cols-3 md:gap-8">
            <div className="md:col-span-1">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <img
                    className="mx-auto w-full object-cover rounded-t-lg"
                    src={
                      profileData?.profile?.student_profile_pic
                       ? profileData.profile.student_profile_pic
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    alt="Profile"
                  />
                </div>
                <div className="px-4 py-5 sm:px-6">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500">
                      Full Name
                    </dt>
                    <dd className="mt-1 text-lg leading-6 font-medium text-gray-900">
                      {profileData?.profile?.fname} {profileData?.profile?.lname}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      Roll No
                    </dt>
                    <dd className="mt-1 text-lg leading-6 font-medium text-gray-900">
                      {profileData?.profile?.user_id}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      Discipline
                    </dt>
                    <dd className="mt-1 text-lg leading-6 font-medium text-gray-900">
                      {profileData?.profile?.discipline}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      Year of Graduation
                    </dt>
                    <dd className="mt-1 text-lg leading-6 font-medium text-gray-900">
                      {profileData?.profile?.year_of_graduation}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      Contact
                    </dt>
                    <dd className="mt-1 text-lg leading-6 font-medium text-gray-900">
                      {profileData?.profile?.contact}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      CGPA
                    </dt>
                    <dd className="mt-1 text-lg leading-6 font-medium text-gray-900">
                      {profileData?.profile?.cgpa}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      Tagline
                    </dt>
                    <dd className="mt-1 text-lg leading-6 font-medium text-gray-900">
                      {profileData?.profile?.tagline}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      Personal Statement
                    </dt>
                    <dd className="mt-1 text-lg leading-6 font-medium text-gray-900">
                      {profileData?.profile?.personal_statement}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Certificates
                  </h2>
                  <ul className="mt-2 divide-y divide-gray-200">
                    {profileData?.certificates?.map((certificate, index) => (
                      <li key={index} className="py-2">
                        <span className="block text-sm font-medium text-gray-900">
                          {certificate.certificate}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Experiences
                  </h2>
                  <ul className="mt-2 divide-y divide-gray-200">
                    {profileData?.experiences?.map((experience, index) => (
                      <li key={index} className="py-2">
                        <span className="block text-sm font-medium text-gray-900">
                          {experience.experience}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
