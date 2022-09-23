import React from 'react'
import SearchBar from '@molecules/inputs/search-bar'
import BtnIconDarkMode from '@molecules/btns/btn-dark-mode'
import MenuPrimary from '@molecules/menu-primary/menu-primary'

function Header () {
  return (
    <header className='
    flex items-center justify-around
    py-4 px-4
    bg-fond_header
    '
    >
      {/* menu principal */}
      <MenuPrimary />

      {/* search bar */}
      <SearchBar value='' placeholder='' setValueInput={undefined}><span>Barre de recherche</span></SearchBar>

      {/* menu tool */}
      <BtnIconDarkMode />
    </header>
  )
}

export default Header
