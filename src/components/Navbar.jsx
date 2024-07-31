import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>Abdou</div>
        <div>
            <ul className='nav-links'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Skills</a></li>
                <li><a href='/'>Projects</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </div>
        <div className='my-cv'>
          <button>
            Download CV
          </button>
        </div>
    </div>
  )
}

export default Navbar;