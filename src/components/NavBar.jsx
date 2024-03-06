import React from 'react'

function NavBar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex items-center justify-center">
            <div className="flex items-center space-x-2">
                <img src="https://upload.wikimedia.org/wikipedia/en/e/e0/Game_of_Thrones_Season_8.png" alt="Logo" className="h-18 w-12 mr-2" />
                <h1 className="text-xl font-semibold">Game of Thrones Universe</h1>
            </div>
        </div>
    </nav>
  )
}

export default NavBar