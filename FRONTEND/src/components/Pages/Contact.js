// import React from "react";

// export const Contact = () => {
//   const latitude = 24.8568991;
//   const longitude = 67.2646838;

//   return (
//     <div className="bg-[#f3f1ec] w-auto mx-auto p-6">
//       <h1 className="text-gray-800 text-3xl font-bold mb-6 text-center">
//         Contact Us
//       </h1>
//       <div className="text-gray-700">
//         <p className="mb-4">
//           We value your feedback, questions, and inquiries. The Team of Office
//           of Industrial Liaison and Career Services is here to assist you in
//           every way possible. Whether you're a job seeker in search of guidance
//           or an employer with hiring needs, we're just a message away. Here's
//           how you can reach us:
//         </p>

//         <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
//         <p>Email: aysha.siddiqui@nu.edu.pk</p>
//         <p>Email: cso.khi@nu.edu.pk</p>

//         <h2 className="text-xl font-semibold mt-4 mb-2">
//           Connect on Social Media
//         </h2>
//         <p>
//           LinkedIn:{" "}
//           <a
//             href="https://www.linkedin.com/in/aysha-siddiqui-9880451a2/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500"
//           >
//             Aysha Siddiqui LinkedIn
//           </a>
//         </p>

//         <h2 className="text-xl font-semibold mt-4 mb-2">Visit Us</h2>
//         <p>
//           If you prefer face-to-face interactions, you can visit our office
//           during business hours at the following address:
//         </p>
//         <p>
//           Office of Industrial Liaison, Career Services and Digital Media, FAST
//           National University of Computer and Emerging Sciences, Karachi
//           <br />
//           St-4, Sector 17-D, NH 5, Karachi, Karachi City, Sindh
//         </p>

//         <h2 className="text-xl font-semibold mt-4 mb-2">Business Hours</h2>
//         <p>
//           Monday to Friday: 9:00 AM – 3:30 PM (Local Time)
//           <br />
//           Saturday: Closed
//           <br />
//           Sunday: Closed
//         </p>

//         <h2 className="text-xl font-semibold mt-4 mb-2">
//           Feedback and Suggestions
//         </h2>
//         <p>
//           We highly value your feedback and suggestions, as they help us improve
//           our services. If you have any ideas or recommendations to enhance your
//           experience with us, please don't hesitate to share them with us at
//           aysha.siddiqui@nu.edu.pk.
//         </p>

//         <h2 className="text-xl font-semibold mt-4 mb-2">Visit Us</h2>
//         <div className="mb-6">
//           {/* Replace the following iframe with your generated Google Maps Embed API iframe */}
//           <iframe
//             title="Google Maps"
//             width="100%"
//             height="300"
//             frameBorder="0"
//             style={{ border: 0 }}
//             src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
//             // src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=YOUR_LOCATION`}
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a token exists in local storage
    const token = localStorage.getItem("token");
    if (!token) {
      // If no token is found, redirect to the "NotFound" page
      navigate("/NotFound");
    }
  }, [navigate]);

  const latitude = 24.8568991;
  const longitude = 67.2646838;

  return (
    <div className="bg-[#c7ecfc] min-h-screen flex flex-col justify-center items-center px-4 py-8">
      <div className="max-w-3xl bg-white rounded-lg overflow-hidden shadow-xl p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Contact Us
        </h1>
        <div className="text-gray-700">
          <p className="mb-6">
            We value your feedback, questions, and inquiries. The Team of Office
            of Industrial Liaison and Career Services is here to assist you in
            every way possible. Whether you're a job seeker in search of guidance
            or an employer with hiring needs, we're just a message away. Here's
            how you can reach us:
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>Email: aysha.siddiqui@nu.edu.pk</p>
          <p>Email: cso.khi@nu.edu.pk</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Connect on Social Media
          </h2>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/aysha-siddiqui-9880451a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Aysha Siddiqui LinkedIn
            </a>
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Visit Us</h2>
          <p>
            If you prefer face-to-face interactions, you can visit our office
            during business hours at the following address:
          </p>
          <p>
            Office of Industrial Liaison, Career Services and Digital Media, FAST
            National University of Computer and Emerging Sciences, Karachi
            <br />
            St-4, Sector 17-D, NH 5, Karachi, Karachi City, Sindh
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Business Hours</h2>
          <p>
            Monday to Friday: 9:00 AM – 3:30 PM (Local Time)
            <br />
            Saturday: Closed
            <br />
            Sunday: Closed
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Feedback and Suggestions
          </h2>
          <p>
            We highly value your feedback and suggestions, as they help us improve
            our services. If you have any ideas or recommendations to enhance your
            experience with us, please don't hesitate to share them with us at
            our email.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Location</h2>
          <div className="mb-6">
            {/* Replace the following iframe with your generated Google Maps Embed API iframe */}
            <iframe
              title="Google Maps"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
              // src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=YOUR_LOCATION`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
