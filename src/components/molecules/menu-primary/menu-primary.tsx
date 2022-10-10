import React from 'react'
import ClubIcon from '@atoms/icons/club-icon'
import HomeIcon from '@atoms/icons/home-icon'
import LinkBtn from '@atoms/links/link-btn'
import MenuDropdownLand from '@molecules/menu-dropdown-land/menu-dropdown-land'

function MenuPrimary () {
  return (
    <ul className='flex items-center justify-around hidden sm:visible md:flex'>
      {/* link home */}
      <li>
        <LinkBtn link='/'>
          <HomeIcon size='w-5 h-5' />
          <span className='ml-2'>Home</span>
        </LinkBtn>
      </li>

      {/* dropdown land */}
      <MenuDropdownLand addClass='mr-2 ml-2'>
        Terrains
      </MenuDropdownLand>

      {/* link club */}
      <li>
        <LinkBtn link='/club'>
          <ClubIcon size='w-5 h-5' />
          <span className='ml-2'>Club</span>
        </LinkBtn>
      </li>
    </ul>
  )
}

export default MenuPrimary
