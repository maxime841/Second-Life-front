import TemplatePublic from '@templates/template-public'
import { Route, Routes } from 'react-router-dom'
import './app.css'
import ClubPage from './public/club-page'
import HomePage from './public/home-page'
import LoginPage from './public/login-page'
import OneLand from './public/land-page'
import React, { useState } from 'react'
import { TLand } from '@types-app/land.type'

function App () {
  const [lands] = useState<TLand[]>([])
  const routeLands = lands.map(land =>
    <Route key={land.name} path={`/land/${land.id}`} element={<OneLand />} />
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
