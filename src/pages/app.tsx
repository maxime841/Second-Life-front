import TemplatePublic from '@templates/template-public'
import { Route, Routes } from 'react-router-dom'
import './app.css'
import ClubPage from './public/club-page'
import HomePage from './public/home-page'
import LoginPage from './public/login-page'
import OneLand from './public/land-page'
import React, { useState } from 'react'

function App () {
  const [lands] = useState([])
  const routeLands = lands.map(({ path, Land }) =>
    <Route key={Land} path={path} element={<OneLand />} />
  )

  return (
    <Routes>
      <Route element={<TemplatePublic />}>
        <Route path='/' element={<HomePage />} />
        {routeLands}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/club' element={<ClubPage />} />
      </Route>
    </Routes>
  )
}

export default App
