import TemplatePublic from '@templates/template-public'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './app.css'
import ClubPage from './public/club-page'
import HomePage from './public/home-page'
import LoginPage from './public/login-page'
import { LandPage } from './public/land-page'
import React, { useEffect } from 'react'
import { TemplatePrivate } from '@templates/template-private'
import { DashboardPage } from './private/dashboard-page'
import { LoginGuard } from '@config-app/login-guard/login-guard'
import { AuthGuard } from '@config-app/auth-guard/auth-guard'
import { ForgotPasswordPage } from './public/forgot-password-page'
import { ResetPasswordPage } from './public/reset-password-page'
import { Store } from '@store/store'
import { LandPageOffice } from './private/land-page'
import { HousePageOffice } from './private/house-page'
import { TenantPageOffice } from './private/tenant-page'
import { ClubPageOffice } from './private/club-page'
import { DjPageOffice } from './private/dj-page'
import { DancerPageOffice } from './private/dancer-page'
import { UserPageOffice } from './private/user-page'
import ProfilPage from './private/profil-page'
import ProfilUpdatePage from './private/update-profil-page'
import ProfilUpdatePasswordPage from './private/update-password-profil-page'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    if (Store.token.verifiedConnected()) {
      navigate('/login')
    }
  }, [])

  return (
    <Routes>
      <Route element={<TemplatePublic />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/land/:idLand' element={<LandPage />} />
        <Route path='/club' element={<ClubPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route element={<LoginGuard />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        </Route>
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<TemplatePrivate />}>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/lands' element={<LandPageOffice />} />
          <Route path='/houses' element={<HousePageOffice />} />
          <Route path='/tenants' element={<TenantPageOffice />} />
          <Route path='/clubs' element={<ClubPageOffice />} />
          <Route path='/djs' element={<DjPageOffice />} />
          <Route path='/dancers' element={<DancerPageOffice />} />
          <Route path='/users' element={<UserPageOffice />} />
          <Route path='/user/profil' element={<ProfilPage />} />
          <Route path='/user/profil/update' element={<ProfilUpdatePage />} />
          <Route path='/user/profil/update/password' element={<ProfilUpdatePasswordPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
