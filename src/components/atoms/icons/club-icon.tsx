import React from 'react'
import { TIcons } from '@types-app/icon.type'

/**
 * Club
 * @param size? string | undefined
 * @param color? string | null | undefined
 * @returns
 */
function ClubIcon ({ color, size }: TIcons) {
  return (
    <img
      src='https://cdn.worldvectorlogo.com/logos/club-house.svg'
      alt='Club House Vector Logo - Download Free SVG Icon | Worldvectorlogo'
      data-noaft='1'
      className={`
      ${color} 
      ${size ?? 'w-8 h-8'}
      rounded-full
      `}
    />
  )
}

export default ClubIcon
