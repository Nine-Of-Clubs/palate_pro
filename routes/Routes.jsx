import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, User, Ingredients, Food, Recipes, About, Assistant } from '../pages'
import { Post, Create_Post } from '../components'

const StateRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/community" element={<Recipes/>}></Route>
        <Route path="/foods" element={<Food/>}></Route>
        <Route path="/ingredients" element={<Ingredients/>}></Route>
        <Route path="/chat" element={<Assistant/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/posts" element={<Post/>}></Route>
       <Route path="/create" element={<Create_Post/>}></Route>
  
    </Routes>

  )
}

export default StateRoutes