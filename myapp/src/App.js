import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notFound/NotFound'
import Footer from './components/Footer'
import Direction from './pages/directions/Direction'



const App = () => {
  return (
    <BrowserRouter>

      <Navbar/>
      
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='direction' element={<Direction/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
