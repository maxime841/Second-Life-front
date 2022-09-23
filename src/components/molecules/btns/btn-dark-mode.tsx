import React from 'react'
import { Store } from '@store/store'
import BtnIcon from '@atoms/btns/btn-icon'
import MoonIcon from '@atoms/icons/moon-icon'
import SunIcon from '@atoms/icons/sun-icon'

/**
 * btn dark mode with change icon moon or sun
 * @returns
 */
function BtnIconDarkMode () {
  const darkModeActivate = Store.darkmode.useDarkModeActivate()

  return (
    <BtnIcon
      click={() => Store.darkmode.switchDarkMode(darkModeActivate)}
    >
      {
        darkModeActivate
          ? <SunIcon color='text-yellow-300' />
          : <MoonIcon color='text-white' />
      }
    </BtnIcon>
  )
}

export default BtnIconDarkMode
