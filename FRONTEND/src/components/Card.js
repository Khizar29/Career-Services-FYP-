import React from "react";

const Card = ({ name, designation, campus }) => {
  return (
    <div className="bg-[#f3f1ec] rounded-lg shadow-lg overflow-hidden w-64 text-center m-4">
      <div className="relative mx-auto p-6 pb-4">
        <img
          className="rounded-full h-32 w-32 object-cover mx-auto"
          src="https://media.licdn.com/dms/image/D4D03AQFu54_DNMuirg/profile-displayphoto-shrink_800_800/0/1712762224330?e=1721260800&v=beta&t=F2d5t3_qKUgOY6j2TaXYQL1LnEj8sQAihrTCD9hgaKQ"
          alt="Profile"
        />
      </div>
      <div className="px-4 py-5 text-center">
        <h3 className="text-lg leading-6 font-medium text-gray-800">{name}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-600">
          Designation: {designation}
        </p>
        <p className="mt-1 max-w-2xl text-sm text-gray-600">Campus: {campus}</p>
      </div>
    </div>
  );
};

export default Card;