import TemplatePublic from '@templates/template-public'
import { Route, Routes } from 'react-router-dom'
import './app.css'
import ClubPage from './public/club-page'
import HomePage from './public/home-page'
import LoginPage from './public/login-page'
import OneLand from './public/land-page'
import { TLand } from '@types-app/land.type'
import { Store } from '@store/store'

function App () {
  const lands = Store.land.useLand()
  const routeLands = (lands as unknown as TLand[]).map(land =>
    <Route key={land.name} path={`/land/${land.id}`} element={<OneLand />} />
  )
  console.log('routeLands:', routeLands)
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
