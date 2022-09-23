import React from 'react'
import SearchBar from '@molecules/inputs/search-bar'
import MenuPrimary from '@molecules/menu-primary/menu-primary'
import MenuTool from '@molecules/menu-tool/menu-tool'

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
      <MenuTool />
    </header>
  )
}

export default Header
