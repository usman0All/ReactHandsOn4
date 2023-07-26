import React from 'react'
import { Link } from 'react-router-dom'

function LinkCompo() {
  return (
    <>
    <div id="link">
        <Link to="/" className='Link'>Home</Link>
        <Link to="/student" className='Link'>Students</Link>
        <Link to="/contact" className='Link'>Contact</Link>
    </div>
    </>
  )
}

export default LinkCompo