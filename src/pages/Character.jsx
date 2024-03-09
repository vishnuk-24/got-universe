import React from 'react'
import NavBar from '../components/NavBar'
import CharacterDetail from '../components/CharacterDetail'
import { useParams } from 'react-router-dom'

function Character() {
  const { id } = useParams()

  return (
    <>
      <NavBar />
      <CharacterDetail id={id} />
    </>
  )
}

export default Character