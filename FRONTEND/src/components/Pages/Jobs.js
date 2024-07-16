import React, { useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom"; 
import "./Styles.css";
import JobForm from "../Jobs/JobForm";
import JobList from "../Jobs/JobList";
import EditModal from "../Jobs/EditModal";
import DeleteConfirmationModal from "../Jobs/DeleteConfirmationModal";
import JobsSearchFilter from "../Jobs/JobsSearchFilter";
import axios from "axios";
import axiosInstance from "./../../axiosConfig";

export const Jobs = () => {
  
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // eslint-disable-next-line
  const [selectedJobID, setSelectedJobID] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  // eslint-disable-next-line
  const [updatedJob, setUpdatedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // If token is not available, redirect to the "NotFound" page
      navigate("/NotFound");
    }

    const fetchJobPostings = async () => {
      try {
        const response = await axiosInstance.get("/jobs");
        console.log("Response from server:", response);
        setJobs(response.data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(
            "Server responded with an error status:",
            error.response.status
          );
          console.log("Response data:", error.response.data);
          console.log("Response headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received from the server");
          console.log("Request details:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error setting up the request:", error.message);
        }
        console.error("Error fetching job postings:", error);
      }
    };

    fetchJobPostings();
  }, []);

  const handleAddJobClick = () => {
    setShowForm(true);
  };

  // const handleJobSubmit = async (formData) => {
  //   await axios.post("http://localhost:7000/jobs", formData);
  //   // await axios.post("https://backend-fast-nu-career-development-portal-tais.vercel.app/jobs", formData);

  //   const response = await axios.get("http://localhost:7000/jobs");
  //   // const response = await axios.get("https://backend-fast-nu-career-development-portal-tais.vercel.app/jobs");

  //   setJobs(response.data);

  //   setShowForm(false);
  // };

  const handleJobSubmit = async (formData) => {
    try {
      // Post the new job to the server
      await axios.post("http://localhost:7000/jobs", formData);
      // await axios.post("https://backend-cdp.vercel.app/jobs", formData);

      // Fetch the newly added job from the server
      const response = await axios.get("http://localhost:7000/jobs");
      // const response = await axios.get("https://backend-cdp.vercel.app/jobs");
      

  
      // Add the newly added job to the jobs array
      setJobs([...jobs, response.data]);
  
      // Hide the job form
      setShowForm(false);
    } catch (error) {
      console.error("Error submitting job:", error);
    }
  };
  
  

  const handleJobCancel = () => {
    setShowForm(false);
  };

  const handleDeleteJobClick = (job) => {
    console.log("Job in handleDeleteJobClick:", job);
    setSelectedJob(job);
    setShowDeleteModal(true);
  };

  const handleJobDelete = async () => {
    console.log("Selected job:", selectedJob);
    // Check if selectedJob exists and it has the ID property
    if (selectedJob && selectedJob.job_id) {
      try {
        const response = await axios.delete(
          `http://localhost:7000/jobs/${selectedJob.job_id}`
          // `https://backend-cdp.vercel.app/jobs/${selectedJob.job_id}`
        );
        if (response.status === 204) {
          // setJobs(jobs.filter((job) => job.ID !== selectedJob.job_id));
          setJobs(jobs.filter((job) => job.job_id !== selectedJob.job_id));
          setSelectedJob(null);
          setShowDeleteModal(false);
        } else {
          console.error("Error deleting job:", response.data.error);
        }
      } catch (error) {
        console.error("Error deleting job:", error);
      }
    } else {
      console.error("Selected job or job ID is undefined.");
    }
  };
  
  
  

  const handleDeleteCancel = () => {
    // setSelectedJobID(null);
    setShowDeleteModal(false);
  };

  const handleEditJobClick = (jobId) => {
    console.log("Job ID clicked for edit:", jobId);
    const job = jobs.find((job) => job.job_id === jobId);
    console.log("Selected job for edit:", job);
    if (job) {
      setSelectedJob(job);
      setShowEditModal(true);
      console.log("Edit modal should be shown now");
    } else {
      console.error("Job not found for editing.");
    }
  };
  

  const handleJobEdit = async (updatedJob) => {
    console.log("selectedJob:", selectedJob);
    console.log("updatedJob:", updatedJob);
    try {
      if (selectedJob && updatedJob && selectedJob.job_id !== undefined) { // Corrected access to job_id property
        console.log("Updating job:", updatedJob);
        const response = await axios.put(
          `http://localhost:7000/jobs/${selectedJob.job_id}`, // Corrected URL interpolation
          // `https://backend-cdp.vercel.app/jobs/${selectedJob.job_id}`,
          updatedJob
        );
        console.log("Response from server:", response);
        if (response.status === 200) {
          setJobs(
            jobs.map((job) => (job.job_id === selectedJob.job_id ? updatedJob : job)) // Corrected access to job_id property
          );
          // setUpdatedJob(updatedJob);
          setShowEditModal(false);
        } else {
          console.error("Error editing job:", response.data.error);
        }
      } else {
        console.error("Invalid selected job or job ID.");
      }
    } catch (error) {
      console.error("Error editing job:", error);
    }
  };
  

  const handleEditCancel = () => {
    setSelectedJob(null);
    setShowEditModal(false);
  };

  const handleSearch = (searchQuery) => {
    // Filter the jobs based on the search query
    const filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Update the state with the filtered jobs
    setJobs(filteredJobs);
  };
  
  const onViewJobClick = (job) => {
    
    if (job) {
      navigate(`/jobs/${job.job_id}`, { state: { job: job } }); // Navigate to job details page with job ID as parameter and pass job details as state
    } else {
      console.error("Job details are missing.");
    }
  };


  return (
    <div className="mt-4 heading">
      <div>
        <JobsSearchFilter
          searchQuery={searchQuery}
          handleSearch={handleSearch}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <h1 className="mt-2 text-gray-800 text-3xl font-bold mb-6 text-center">
        Job Posting
      </h1>
      {/* { */}
      {localStorage.getItem('user_roles') === "1" && (
      <div className="Button">
        <button className="add-job-button w-auto" onClick={handleAddJobClick}>
          Add Job
        </button>
      </div>
      )}
      {showForm && (
        <JobForm onSubmit={handleJobSubmit} onCancel={handleJobCancel} />
      )}
      {showDeleteModal && (
        <DeleteConfirmationModal
          onConfirm={handleJobDelete}
          onCancel={handleDeleteCancel}
        />
      )}
      {showEditModal && (
        <EditModal
          isOpen={true}
          job={selectedJob}
          onUpdate={(jobData) => setUpdatedJob(jobData)}
          onConfirm={handleJobEdit}
          onCancel={handleEditCancel}
        />
      )}
      {jobs.length > 0 ? (
        (console.log("Jobs:", jobs),
        (
          <JobList
            jobs={jobs}
            onJobClick={() => {}}
            onDeleteJobClick={handleDeleteJobClick}
            onEditJobClick={handleEditJobClick}
            onViewJobClick={onViewJobClick}
          />
        ))
      ) : (
        <h2>No jobs posted yet</h2>
      )}
    </div>
  );
};

export default Jobs;