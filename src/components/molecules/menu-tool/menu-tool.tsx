import LinkBtn from '@atoms/links/link-btn'
import BtnIconDarkMode from '@molecules/btns/btn-dark-mode'
import React from 'react'

function MenuTool () {
  return (
    <ul className='flex items-center justify-center'>
      {/* btn dark mode */}
      <BtnIconDarkMode addClass='mr-8' />

      {/* btn page connexion */}
      <li>
        <LinkBtn link='/login'>Se connecter</LinkBtn>
      </li>
    </ul>
  )
}

export default MenuTool
