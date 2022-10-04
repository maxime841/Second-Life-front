import TemplatePublic from '@templates/template-public'
import { Route, Routes } from 'react-router-dom'
import './app.css'
import ClubPage from './public/club-page'
import HomePage from './public/home-page'
import LoginPage from './public/login-page'
import { LandPage } from './public/land-page'
import React from 'react'
import { TemplatePrivate } from '@templates/template-private'
import { DashboardPage } from './private/dashboard-page'
import { LoginGuard } from '@config-app/login-guard/login-guard'
import { AuthGuard } from '@config-app/auth-guard/auth-guard'

function App() {
  return (
    <Routes>
      <Route element={<TemplatePublic />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/land/:idLand' element={<LandPage />} />
        <Route element={<LoginGuard />}>
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route path='/club' element={<ClubPage />} />
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<TemplatePrivate />}>
          <Route path='/dashboard' element={<DashboardPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
