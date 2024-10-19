import React from 'react'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'




const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/About' element={<About />} />
    </Routes>  
  
  )
}
export default App