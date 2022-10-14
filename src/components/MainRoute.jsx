import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Characters from './Characters'
import Detail from './Detail'
import Favourite from './Favourite'
import { Footer } from './Footer'

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Characters/>} />
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/favourite" element={<Favourite/>}/>
    </Routes>
    <Footer/>
    </>
  
  )
}

export default MainRoute