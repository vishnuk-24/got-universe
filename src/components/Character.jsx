import React from 'react'
import { Link } from 'react-router-dom'


function Character({character}) {

  return (
    <Link to={`/character/${character.id}`}>
        <div className="bg-white p-4 rounded-md shadow-md">
            <img src={character.imageUrl} alt={character.fullName} className="w-full h-40 object-cover mb-4" />
            <div className="text-gray-800">
                <p className="text-sm">ID: {character.id}</p>
                <p className="text-lg font-bold">{character.fullName}</p>
            </div>
        </div>
    </Link>
  )
}

export default Character