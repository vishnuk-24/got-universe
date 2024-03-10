import React from "react";

function Continent({ continent }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="text-gray-800">
        <p className="text-sm">ID: {continent.id}</p>
        <p className="text-lg font-bold">{continent.name}</p>
      </div>
    </div>
  );
}

export default Continent;
