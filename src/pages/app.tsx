import TemplatePublic from '@templates/template-public'
import { Route, Routes } from 'react-router-dom'
import './app.css'
import ClubPage from './public/club-page'
import HomePage from './public/home-page'
import LoginPage from './public/login-page'
import React from 'react'

function App() {
  return (
    <Routes>
      <Route element={<TemplatePublic />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/club' element={<ClubPage />} />
      </Route>
    </Routes>
  )
}

export default App
