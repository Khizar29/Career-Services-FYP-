import React, { useState, useEffect } from "react";
import "./EditModal.css";

const EditModal = ({ job, onConfirm, onCancel }) => {
  const [formData, setFormData] = useState({ ...job });

  // useEffect(() => {
  //   setFormData({ ...job });
  // }, [job]);

  useEffect(() => {
    // Convert date strings to the format accepted by input type="date"
    const formattedJob = {
      ...job,
      Deadline: job.Deadline ? job.Deadline.slice(0, 10) : "", // Extract date part (YYYY-MM-DD)
      posted_on: job.posted_on ? job.posted_on.slice(0, 10) : "",
      updated_on: job.updated_on ? job.updated_on.slice(0, 10) : "",
    };
    setFormData(formattedJob);
  }, [job]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onConfirm(formData);
  };

  

  return (
    <div className="edit-modal-overlay">
      {/* <div className={`edit-modal-overlay ${isOpen ? 'open' : ''}`}> */}
      <div className="edit-modal-container">
        <div className="edit-modal-header">
          <h2 className="edit-modal-title">Edit Job</h2>
          <button className="edit-modal-close-btn" onClick={onCancel}>
            <svg
              className="edit-modal-close-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="edit-modal-form">
          {/* Job Title */}
          <div className="edit-modal-form-group">
            <label htmlFor="title" className="edit-modal-label">
              Job Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          {/* Job Type */}
          <div className="edit-modal-form-group">
            <label htmlFor="job_type" className="edit-modal-label">
              Job Type:
            </label>
            <select
              id="job_type"
              name="job_type"
              value={formData.job_type}
              onChange={handleInputChange}
              className="edit-modal-input"
            >
              <option value="On-site">On-site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="job_description" className="edit-modal-label">
              Job Description:
            </label>
            <textarea
              id="job_description"
              name="job_description"
              value={formData.job_description}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="link" className="edit-modal-label">
              Job Link:
            </label>
            <input
              type="text"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          {/* <div className="edit-modal-form-group">
            <label htmlFor="Deadline" className="edit-modal-label">
              Deadline Date:
            </label>
            <input
              type="date"
              id="Deadline"
              name="Deadline"
              value={formData.Deadline}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div> */}
          {/* <div className="edit-modal-form-group">
            <label htmlFor="no_of_openings" className="edit-modal-label">
              No. of Openings:
            </label>
            <input
              type="number"
              id="no_of_openings"
              name="no_of_openings"
              value={formData.no_of_openings}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div> */}
          <div className="edit-modal-form-group">
            <label
              htmlFor="qualifications_req"
              className="edit-modal-label"
            >
              Qualification Requirements:
            </label>
            <textarea
              id="qualifications_req"
              name="qualifications_req"
              value={formData.qualifications_req}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          {/* <div className="edit-modal-form-group">
            <label htmlFor="responsibilities" className="edit-modal-label">
              Responsibilities:
            </label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div> */}
          {/* <div className="edit-modal-form-group">
            <label htmlFor="about" className="edit-modal-label">
              About:
            </label>
            <textarea
              id="about"
              name="about"
              value={formData.about}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="job_status" className="edit-modal-label">
              Job Status:
            </label>
            <input
              type="text"
              id="job_status"
              name="job_status"
              value={formData.job_status}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div> */}
          <div className="edit-modal-form-group">
            <label htmlFor="posted_on" className="edit-modal-label">
              Posted On:
            </label>
            <input
              type="date"
              id="posted_on"
              name="posted_on"
              value={formData.posted_on}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="updated_on" className="edit-modal-label">
              Updated On:
            </label>
            <input
              type="date"
              id="updated_on"
              name="updated_on"
              value={formData.updated_on}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          {/* Other input fields go here */}
          <div className="edit-modal-footer">
            <button
              type="button"
              onClick={onCancel}
              className="edit-modal-btn edit-modal-cancel-btn"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="edit-modal-btn edit-modal-save-btn"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
