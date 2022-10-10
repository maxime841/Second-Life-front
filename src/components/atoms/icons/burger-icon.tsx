import { TIcons } from '@types-app/icon.type'
import React from 'react'

/**
 * Icone Menu burger
 * @param size? string | undefined
 * @param color? string | null | undefined
 * @returns
 */
function BurgerIcon ({ color, size }: TIcons) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='#000000'
      viewBox='0 0 50 50'
      width='50px'
      height='50px'
      className={`${color} ${size ?? 'w-6 h-6'}
      `}
    >
      <path
        d='M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z'
      />
    </svg>
  )
}

export default BurgerIcon
