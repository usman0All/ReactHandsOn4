import React from 'react'
import Home from './Home'
import Students from './Students'
import Contact from './Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LinkCompo from './LinkCompo'

function RouteCompo() {
  return (
    <div>
    <BrowserRouter>
    <LinkCompo/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/student" element={<Students/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </BrowserRouter>
    {/* <Home/>
    <Students/>
    <Contact/> */}

    </div>
  )
}

export default RouteCompo