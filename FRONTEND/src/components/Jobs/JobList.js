// import React from "react";
// import "./JobList.css";

// const JobList = ({ jobs, onDeleteJobClick, onEditJobClick }) => {
//   const formatDate = (dateString) => {
//     if (!dateString) {
//       return "Invalid Date";
//     }

//     const date = new Date(dateString);

//     if (isNaN(date)) {
//       console.log("Invalid date string:", dateString);
//       return "Invalid Date";
//     }

//     const formattedDate = date.toLocaleDateString(undefined, {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//     return formattedDate;
//   };

//   const handleJobLinkClick = (event, jobLink) => {
//     console.log("link clicked");
//     event.preventDefault();

//     if (jobLink && !jobLink.startsWith("http://") && !jobLink.startsWith("https://")) {
//       jobLink = "http://" + jobLink;
//     }
//     console.log(jobLink);
//     window.open(jobLink, "_blank");
//   };

//   return (
//     <div className="container mx-auto">
//       <div className="job-list">
//         {jobs.map((job) => (
//           <div key={job.ID} className="job-item bg-gray-100 rounded-lg shadow-md p-6 mb-4">
//             <h2 className="job-title text-2xl font-bold mb-2">{job.title}</h2>
//             <p className="job-type text-lg font-bold mb-2">{job.job_type}</p>
//             <p className="job-description text-gray-700 mb-4">{job.job_description}</p>
//             <p className="job-link text-blue-500 mb-2">
//               <a
//                 href={job.link}
//                 className="underline"
//                 onClick={(event) => handleJobLinkClick(event, job.link)}
//               >
//                 Click here to apply
//               </a>
//             </p>
//             <div className="job-details">
//               <p><strong>Deadline:</strong> {formatDate(job.Deadline)}</p>
//               <p><strong>No. of Openings:</strong> {job.no_of_openings}</p>
//               <p><strong>Qualification Requirements:</strong> {job.qualifications_req}</p>
//               <p><strong>Responsibilities:</strong> {job.responsibilities}</p>
//               <p><strong>About:</strong> {job.about}</p>
//               <p><strong>Job Status:</strong> {job.job_status}</p>
//               <p><strong>Posted On:</strong> {formatDate(job.posted_on)}</p>
//               <p><strong>Updated On:</strong> {formatDate(job.updated_on)}</p>
//             </div>
//             <div className="button-container mt-4 flex justify-center">
//               <button
//                 className="delete-job bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4"
//                 onClick={() => onDeleteJobClick(job)}
//               >
//                 Delete
//               </button>
//               <button
//                 className="edit-job bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => onEditJobClick(job.job_id)}
//               >
//                 Edit
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobList;

import React from "react";
import { BriefcaseIcon, CalendarIcon, LinkIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid';

const JobList = ({ jobs, onDeleteJobClick, onEditJobClick, onViewJobClick }) => {
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

  const handleJobLinkClick = (event, jobLink) => {
    console.log("link clicked");
    event.preventDefault();

    if (jobLink && !jobLink.startsWith("http://") && !jobLink.startsWith("https://")) {
      jobLink = "http://" + jobLink;
    }
    console.log(jobLink);
    window.open(jobLink, "_blank");
  };

  return (
    <div className="p-4 mt-4 grid md:grid-cols-2 gap-4">
      {jobs.map((job, index) => (
        <div key={job.ID} className={`job-item bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg shadow-md p-6 mb-4 ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {job.title}
          </h2>
          <div className="justify-center mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-black-500 justify-center md:justify-start">
              <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-black-500" aria-hidden="true" />
              {job.job_type}
            </div>
            <div className="mt-2 flex items-center text-sm text-black-500 justify-center md:justify-start">
              <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-black-500" aria-hidden="true" />
              Posted on {formatDate(job.posted_on)}
            </div>
          </div>
          <div className="mt-2 text-sm text-black-500">{job.job_description}</div>
          <p className="mt-2 text-blue-500 hover:underline text-center" onClick={(event) => handleJobLinkClick(event, job.link)}>Click here to apply</p>
          {localStorage.getItem('user_roles') === "1" && (          
          <div className="mt-5 flex justify-between">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={() => onEditJobClick(job.job_id)}
            >
              <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              Edit
            </button>
            
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={() => onViewJobClick(job)}
            >
              <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              View
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => onDeleteJobClick(job)}
            >

              <TrashIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Delete
            </button>
            
          </div>
          )}
          {localStorage.getItem('user_roles') === "2" && (          
            <div className="justify-center">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-10 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={() => onViewJobClick(job)}
            >
              <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              View
            </button>
          </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobList;
