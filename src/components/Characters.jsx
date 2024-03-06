import React, { useEffect, useState } from 'react'

import Character from './Character'
import {CHARACTERS_URL} from '../config/urls'

function Characters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchChars = async () => {
      try {
          const response = await fetch(CHARACTERS_URL)
          const data = await response.json()
          console.log("data: ", data);
          setCharacters(data)
          setLoading(false)
        
      } catch (error) {
        console.log("Error", error);
      }
    }

    fetchChars()
  }, [])

  if (characters.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-center gap-8">
            {
                characters.map(character => (
                    <Character key={character.id} character={character} />
                ))
            }
        </div>
    </div>
  )
}

export default Characters