import LinkBtn from '@atoms/links/link-btn'
import BtnIconDarkMode from '@molecules/btns/btn-dark-mode'
import { Store } from '@store/store'
import React from 'react'

function MenuTool() {
  const userCurrent = Store.user.useUserCurrent()

  return (
    <ul className='flex items-center justify-center'>
      {/* btn dark mode */}
      <BtnIconDarkMode addClass='mr-8' />

      {/* btn page connexion */}
      <li>
        <LinkBtn link={`${userCurrent.id ? '/dashboard' : '/login'}`}>
          {userCurrent.id ? <span>Mon compte</span> : <span>Se connecter</span>}
        </LinkBtn>
      </li>
    </ul>
  )
}

export default MenuTool
