import { BtnIcon } from '@atoms/btns/btn-icon'
import { LogoutIcon } from '@atoms/icons/logout-icon'
import LinkBtn from '@atoms/links/link-btn'
import { TooltipBasic } from '@atoms/tooltips/tooltip-sample/tooltip-sample'
import BtnIconDarkMode from '@molecules/btns/btn-dark-mode'
import { Store } from '@store/store'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function MenuTool() {
  const userCurrent = Store.user.useUserCurrent()
  const navigate = useNavigate()

  const handlerClickDisconnect = async () => {
    const res = await Store.user.logout()
    if (res) {
      navigate('/login')
    }
  }

  return (
    <ul className='flex items-center justify-center'>
      {/* btn dark mode */}
      <BtnIconDarkMode addClass='mx-2 md:mx-4' />

      {/* btn disconnect */}
      {userCurrent.id ? (
        <TooltipBasic dataTip='Me déconnecter' positionTip='tooltip-bottom'>
          <BtnIcon click={handlerClickDisconnect} addClass='mr-2 md:mr-4'>
            <LogoutIcon color='text-error' />
          </BtnIcon>
        </TooltipBasic>
      ) : null}

      {/* btn page connexion */}
      <li>
        <LinkBtn link={`${userCurrent.id ? '/user/profil' : '/login'}`}>
          {userCurrent.id ? <span>Mon compte</span> : <span>Se connecter</span>}
        </LinkBtn>
      </li>
    </ul>
  )
}

export default MenuTool
