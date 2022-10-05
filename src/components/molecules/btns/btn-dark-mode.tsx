import React from 'react'
import { Store } from '@store/store'
import { BtnIcon } from '@atoms/btns/btn-icon'
import MoonIcon from '@atoms/icons/moon-icon'
import SunIcon from '@atoms/icons/sun-icon'
import { TBtnDarkMode } from '@types-app/btn.type'

/**
 * btn dark mode with change icon moon or sun
 * @returns
 */
function BtnIconDarkMode({ addClass }: TBtnDarkMode) {
  const darkModeActivate = Store.darkmode.useDarkModeActivate()

  return (
    <BtnIcon
      addClass={addClass}
      click={() => Store.darkmode.switchDarkMode(darkModeActivate)}>
      {darkModeActivate ? (
        <SunIcon color='text-black' />
      ) : (
        <MoonIcon color='text-black' />
      )}
    </BtnIcon>
  )
}

export default BtnIconDarkMode
