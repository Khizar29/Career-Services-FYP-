import React, { useState, useEffect } from "react";
import "./JobForm.css";
import axios from "axios";



const JobForm = ({ onSubmit, onCancel }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLink, setJobLink] = useState("");
  // const [deadlineDate, setDeadlineDate] = useState("");
  const [jobType, setJobType] = useState("");
  // const [noOfOpenings, setNoOfOpenings] = useState("");
  const [qualificationRequirements, setQualificationRequirements] = useState("");
  // const [responsibilities, setResponsibilities] = useState("");
  // const [about, setAbout] = useState("");
  // const [jobStatus, setJobStatus] = useState("");
  const [postedOn, setPostedOn] = useState("");
  const [updatedOn, setUpdatedOn] = useState("");
  const [showForm, setShowForm] = useState(false);


  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0]; // Format to YYYY-MM-DD
    setPostedOn(currentDate);
    setUpdatedOn(currentDate);
  }, []);

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleJobLinkChange = (event) => {
    setJobLink(event.target.value);
  };

  // const handleDeadlineDateChange = (event) => {
  //   setDeadlineDate(event.target.value);
  // };

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  // const handleNoOfOpeningsChange = (event) => {
  //   setNoOfOpenings(event.target.value);
  // };
  const handleQualificationRequirementsChange = (event) => {
    setQualificationRequirements(event.target.value);
  };
  // const handleResponsibilitiesChange = (event) => {
  //   setResponsibilities(event.target.value);
  // };
  // const handleAboutChange = (event) => {
  //   setAbout(event.target.value);
  // };
  // const handleJobStatusChange = (event) => {
  //   setJobStatus(event.target.value);
  // };
  const handlePostedOnChange = (event) => {
    setPostedOn(event.target.value);
  };
  
  const handleUpdatedOnChange = (event) => {
    setUpdatedOn(event.target.value);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const validateForm = () => {
    const errors = {};

    if (!jobTitle) {
      errors.jobTitle = "Please enter a job title";
    }

    if (!jobDescription) {
      errors.jobDescription = "Please enter a job description";
    }

    if (!jobLink) {
      errors.jobLink = "Please enter a job link";
    // } else {
    //   const regex = new RegExp("^(www\\.)([a-z0-9]+)\\.([a-z.]{2,6})$");
    //   if (!regex.test(jobLink)) {
    //     errors.jobLink = "Please enter a valid URL";
    //   }
    }

    // if (!deadlineDate) {
    //   errors.deadlineDate = "Please enter a deadline date";
    // } else if (new Date(deadlineDate) < new Date()) {
    //   errors.deadlineDate = "Please enter a future date";
    // }

    if (!jobType) {
      errors.jobType = "Please choose a job type";
    }

    return errors;
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const errors = validateForm();

  //   if (Object.keys(errors).length === 0) {
  //     try {
  //       console.log("Sending job data:", {
  //         jobTitle,
  //         jobType,
  //         jobDescription,
  //         jobLink,
  //         deadlineDate,
  //         noOfOpenings,
  //         qualificationRequirements,
  //         responsibilities,
  //         about,
  //         jobStatus,
  //         postedOn,
  //         updatedOn,
  //       });

  //       // const response = await axios.post("http://localhost:7000/jobs", {
  //         const response = await axios.post("https://cdp-kappa.vercel.app/jobs", {
  //         jobTitle,
  //         jobType,
  //         jobDescription,
  //         jobLink,
  //         deadlineDate,
  //         noOfOpenings,
  //         qualificationRequirements,
  //         responsibilities,
  //         about,
  //         jobStatus,
  //         postedOn,
  //         updatedOn,
  //       });

  //       window.open("https://main--zesty-creponne-0bcae2.netlify.app/email", "_blank");
        
  //       console.log("Received response:", response.data);
  //       handleShowForm();
  //       onCancel();
  //     } catch (error) {
  //       console.error(error);
  //     }

  //     setJobTitle("");
  //     setJobType("");
  //     setJobDescription("");
  //     setJobLink("");
  //     setDeadlineDate("");
  //     setNoOfOpenings("");
  //     setQualificationRequirements("");
  //     setResponsibilities("");
  //     setAbout("");
  //     setJobStatus("");
  //     setPostedOn("");
  //     setUpdatedOn("");
  //   } else {
  //     setValidationErrors(errors);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
  
    const errors = validateForm();
  
  
    if (Object.keys(errors).length === 0) {
      try {
        
        const response = await axios.post("http://localhost:7000/jobs", {
          // const response = await axios.post("https://backend-cdp.vercel.app/jobs", {
          jobTitle,
          jobType,
          jobDescription,
          jobLink,
          // deadlineDate,
          // noOfOpenings,
          qualificationRequirements,
          // responsibilities,
          // about,
          // jobStatus,
          postedOn,
          updatedOn,
        });
  
        
        // const queryString = new URLSearchParams({
  
        
        const queryString = new URLSearchParams({
          jobTitle,
          jobType,
          jobDescription,
          jobLink,
          // deadlineDate,
          // noOfOpenings,
          qualificationRequirements,
          // responsibilities,
          // about,
          // jobStatus,
          postedOn,
          updatedOn,
        }).toString();
  
        window.open(`http://localhost:3000/email?${queryString}`, "_blank");
        // window.open(`https://main--zesty-creponne-0bcae2.netlify.app/email?${queryString}`, "_blank");
        console.log("Received response:", response.data);
        handleShowForm();
        onCancel();
      } catch (error) {
        console.error(error);
      }
  
      
  
      
      setJobTitle("");
      setJobType("");
      setJobDescription("");
      setJobLink("");
      // setDeadlineDate("");
      // setNoOfOpenings("");
      setQualificationRequirements("");
      // setResponsibilities("");
      // setAbout("");
      // setJobStatus("");
      setPostedOn("");
      setUpdatedOn("");
    } else {
      setValidationErrors(errors);
    }
  };
  

  const handleCancel = () => {
    setValidationErrors({});
    onCancel();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="job-form bg-[#f3f1ec] w-full max-w-lg mx-auto mt-5 px-4 py-3 rounded-md shadow-md "
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="jobTitle"
        >
          Job Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="jobTitle"
          type="text"
          placeholder="Enter Job Title"
          value={jobTitle}
          onChange={handleJobTitleChange}
        />
        {validationErrors.jobTitle && (
          <span className="text-red-500 text-xs italic">
            {validationErrors.jobTitle}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="jobType"
        >
          Job Type
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="jobType"
          value={jobType}
          onChange={handleJobTypeChange}
        >
          <option value="">Please Choose a Job Type</option>
          <option value="On-site">Onsite</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Internship">Internship</option>
        </select>
        {validationErrors.jobType && (
          <span className="text-red-500 text-xs italic">
            {validationErrors.jobType}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="jobDescription"
        >
          Job Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="jobDescription"
          placeholder="Enter Job Description"
          value={jobDescription}
          onChange={handleJobDescriptionChange}
        />
        {validationErrors.jobDescription && (
          <span className="text-red-500 text-xs italic">
            {validationErrors.jobDescription}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="jobLink"
        >
          Job Link
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="jobLink"
          type="text"
          placeholder="Enter Job Link"
          value={jobLink}
          onChange={handleJobLinkChange}
        />
        {validationErrors.jobLink && (
          <span className="text-red-500 text-xs italic">
            {validationErrors.jobLink}
          </span>
        )}
      </div>
      {/* <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="deadlineDate"
        >
          Deadline Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="deadlineDate"
          type="date"
          value={deadlineDate}
          onChange={handleDeadlineDateChange}
        />
        {validationErrors.deadlineDate && (
          <span className="text-red-500 text-xs italic">
            {validationErrors.deadlineDate}
          </span>
        )}
      </div> */}

      {/* <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="noOfOpenings">
          Number of Openings
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="noOfOpenings"
          type="number"
          placeholder="Enter Number of Openings"
          value={noOfOpenings}
          onChange={handleNoOfOpeningsChange}
        />
        {validationErrors.noOfOpenings && (
          <span className="text-red-500 text-xs italic">{validationErrors.noOfOpenings}</span>
        )}
      </div> */}
      <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qualificationRequirements">
    Qualification Requirements
  </label>
  <textarea
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="qualificationRequirements"
    placeholder="Enter Qualification Requirements"
    value={qualificationRequirements}
    onChange={handleQualificationRequirementsChange}
  />
  {validationErrors.qualificationRequirements && (
    <span className="text-red-500 text-xs italic">{validationErrors.qualificationRequirements}</span>
  )}
</div>



{/* <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="responsibilities">
    Responsibilities
  </label>
  <textarea
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="responsibilities"
    placeholder="Enter Responsibilities"
    value={responsibilities}
    onChange={handleResponsibilitiesChange}
  />
  {validationErrors.responsibilities && (
    <span className="text-red-500 text-xs italic">{validationErrors.responsibilities}</span>
  )}
</div> */}

{/* <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="about">
    About
  </label>
  <textarea
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="about"
    placeholder="Enter About"
    value={about}
    onChange={handleAboutChange}
  />
  {validationErrors.about && (
    <span className="text-red-500 text-xs italic">{validationErrors.about}</span>
  )}
</div> */}

{/* <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobStatus">
    Job Status
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="jobStatus"
    type="text"
    placeholder="Enter Job Status"
    value={jobStatus}
    onChange={handleJobStatusChange}
  />
  {validationErrors.jobStatus && (
    <span className="text-red-500 text-xs italic">{validationErrors.jobStatus}</span>
  )}
</div> */}

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postedOn">
    Posted On
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="postedOn"
    type="date"
    value={postedOn}
    onChange={handlePostedOnChange}
  />
  {validationErrors.postedOn && (
    <span className="text-red-500 text-xs italic">{validationErrors.postedOn}</span>
  )}
</div>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="updatedOn">
    Updated On
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="updatedOn"
    type="date"
    value={updatedOn}
    onChange={handleUpdatedOnChange}
  />
  {validationErrors.updatedOn && (
    <span className="text-red-500 text-xs italic">{validationErrors.updatedOn}</span>
  )}
</div>

      <div className="flex items-center justify-center ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center focus:outline-none focus:shadow-outline w-18"
          type="submit"
        >
          Submit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex justify-center focus:outline-none focus:shadow-outline mx-2 w-18"
          type="button"
          onClick={handleCancel}
        >
          Close
        </button>
        </div>
    </form>
  );


};

export default JobForm;