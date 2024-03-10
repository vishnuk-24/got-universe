import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Character from './pages/Character'
import NotFound from './pages/NotFound'
import Characters from './pages/Characters'
import NavBar from './components/NavBar'
import Continents from './pages/Continents'


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='character/:id?' element={<Character />}/>
          <Route path='characters/' element={<Characters />} />
          <Route path='continents/' element={<Continents />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
