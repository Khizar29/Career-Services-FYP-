import React, { useState, useEffect } from "react";
import JobList from "./JobList";
import axios from "axios";

const JobPostings = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const response = await axios.get("http://localhost:7000/jobs");
        // const response = await axios.get("https://backend-cdp.vercel.app/jobs");
        setJobPostings(response.data);
      } catch (error) {
        console.error("Error fetching job postings:", error);
      }
    };

    fetchJobPostings();
  }, []);

  return (
    <div>
      {/* <h1>Job Postings</h1> */}
      {jobPostings.length > 0 ? (
        <JobList
          jobs={jobPostings}
          onJobClick={() => {}}
          onDeleteJobClick={() => {}}
          onEditJobClick={() => {}}
        />
      ) : (
        <h2>No jobs posted yet</h2>
      )}
    </div>
  );
};

export default JobPostings;