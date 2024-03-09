import React, { useEffect, useState } from "react";
import { CHARACTERS_URL } from "../config/urls";

function CharacterDetail({ id }) {
  const [characterDetails, setCharacterDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch(`${CHARACTERS_URL}/${id}`);
        const data = await response.json();
        console.log("data: ", data);
        setCharacterDetails(data);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchCharacterDetails();
  }, []);

  if (characterDetails.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-8 rounded-md shadow-md">
        <img
          src={characterDetails.imageUrl}
          alt={characterDetails.fullName}
          className="w-full h-30 object-cover mb-6"
        />
        <div className="text-gray-800">
          <p className="text-lg font-bold mb-2">Character Detail:</p>
          <p className="mb-2">
            <span className="font-bold">ID:</span> {characterDetails.id}
          </p>
          <p className="mb-2">
            <span className="font-bold">First Name:</span>{" "}
            {characterDetails.firstName}
          </p>
          <p className="mb-2">
            <span className="font-bold">Last Name:</span>{" "}
            {characterDetails.lastName}
          </p>
          <p className="mb-2">
            <span className="font-bold">Full Name:</span>{" "}
            {characterDetails.fullName}
          </p>
          <p className="mb-2">
            <span className="font-bold">Title:</span> {characterDetails.title}
          </p>
          <p className="mb-2">
            <span className="font-bold">Family:</span> {characterDetails.family}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
