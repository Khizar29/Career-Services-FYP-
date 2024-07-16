import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/jobs/${id}`);
        // const response = await axios.get(`https://backend-cdp.vercel.app/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) {
      return "Invalid Date";
    }

    const date = new Date(dateString);

    if (isNaN(date)) {
      console.log("Invalid date string:", dateString);
      return "Invalid Date";
    }

    const formattedDate = date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16 mb-4">
      <div className="relative flex flex-col items-center rounded-lg w-full max-w-3xl mx-auto bg-white shadow-xl p-6">
        {job ? (
          <>
            <div className="w-full mb-8">
              <h2 className="text-xl text-center font-bold text-gray-900">{job.title}</h2>
            </div>
            <div className="w-full mb-8">
              <p className="text-xl text-gray-600">{job.job_description}</p>
            </div>
            <div className="w-full mb-8">
              <ul className="divide-y divide-gray-200">
                <li className="py-4">
                  <p className="text-lg text-gray-900 font-bold">Job Type</p>
                  <p className="text-md font-medium text-gray-500">{job.job_type}</p>
                </li>
                <li className="py-4">
                  <p className="text-lg text-gray-900 font-bold">Link</p>
                  <p className="text-md font-medium text-gray-500">{job.link}</p>
                </li>
                {/* <li className="py-4">
                  <p className="text-lg text-gray-900 font-bold">Deadline</p>
                  <p className="text-md font-medium text-gray-500">{formatDate(job.Deadline)}</p>
                </li> */}
                {/* <li className="py-4">
                  <p className="text-lg text-gray-900 font-bold">No. of Openings</p>
                  <p className="text-md font-medium text-gray-500">{job.no_of_openings}</p>
                </li> */}
                <li className="py-4">
                  <p className="text-lg text-gray-900 font-bold">Qualification Requirements</p>
                  <p className="text-md font-medium text-gray-500">{job.qualifications_req}</p>
                </li>
                {/* <li className="py-4">
                  <p className="text-lg text-gray-900 font-bold">Responsibilities</p>
                  <p className="text-md font-medium text-gray-500">{job.responsibilities}</p>
                </li> */}
                {/* <li className="py-4">
                  <p className="text-lg text-gray-900 font-bold">About</p>
                  <p className="text-md font-medium text-gray-500">{job.about}</p>
                </li> */}
                {/* <li className="py-4">
                  <p className="text-lg text-gray-900 font-bold">Job Status</p>
                  <p className="text-md font-medium text-gray-500">{job.job_status}</p>
                </li> */}
                <li className="py-4">
                  <p className="text-lg text-gray-900 font-bold">Posted On</p>
                  <p className="text-md font-medium text-gray-500">{formatDate(job.posted_on)}</p>
                </li>
                <li className="py-4">
                  <p className="text-lg text-gray-900 font-bold">Updated On</p>
                  <p className="text-md font-medium text-gray-500">{formatDate(job.updated_on)}</p>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <div className="mt-4">
        <Link to="/jobs" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Jobs
        </Link>
      </div>
      </div>
    </div>
  );
};

export default JobDetails;
