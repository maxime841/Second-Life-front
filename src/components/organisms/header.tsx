import React, { useState } from 'react'
import SearchBar from '@molecules/inputs/search-bar'
import MenuPrimary from '@molecules/menu-primary/menu-primary'
import MenuTool from '@molecules/menu-tool/menu-tool'
import BtnIconMenuBurger from '@molecules/btns/btn-burger'

function Header() {
  const [search, setSearch] = useState('')
  return (
    <header
      className='
    flex items-center justify-between sm:justify-around
    py-4 px-2
    bg-fond_header
    '>
      {/* Menu burger mobile */}
      <BtnIconMenuBurger />

      {/* menu principal */}
      <MenuPrimary />

      {/* search bar */}
      <SearchBar
        addClass='hidden sm:flex ml-2'
        value={search}
        placeholder=''
        setValueInput={setSearch}>
        <span>Barre de recherche</span>
      </SearchBar>

      {/* menu tool */}
      <MenuTool />
    </header>
  )
}

export default Header
