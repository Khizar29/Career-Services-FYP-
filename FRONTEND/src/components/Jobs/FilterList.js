import React, { useState } from "react";

const FilterList = () => {
  const [onsite, setOnsite] = useState(false);
  const [remote, setRemote] = useState(false);
  const [hybrid, setHybrid] = useState(false);

  const handleOnsiteChange = (event) => {
    setOnsite(event.target.checked);
  };

  const handleRemoteChange = (event) => {
    setRemote(event.target.checked);
  };

  const handleHybridChange = (event) => {
    setHybrid(event.target.checked);
  };

  return (
    <div class="flex flex-col items-start">
      <label class="w-full py-3 text-sm font-medium text-gray-900" >
        <input id="job-type-checkbox" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" checked={onsite} onChange={handleOnsiteChange} />
        Onsite
      </label>
      <label class="w-full py-3 text-sm font-medium text-gray-900">
        <input id="job-type-checkbox" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" checked={remote} onChange={handleRemoteChange} />
        Remote
      </label>
      <label class="w-full py-3 text-sm font-medium text-gray-900">
        <input id="job-type-checkbox" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" checked={hybrid} onChange={handleHybridChange} />
        Hybrid
      </label>
    </div>
  );
};

export default FilterList;
