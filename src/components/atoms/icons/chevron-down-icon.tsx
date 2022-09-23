import React from 'react'
import { TIcons } from '@types-app/icon.type'

/**
 * Icone Chevron down
 * @param size? string | undefined
 * @param color? string | null | undefined
 * @returns
 */
function ChevronDownIcon ({ color, size }: TIcons) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={`${color} ${size ?? 'w-6 h-6'}
      `}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  )
}

export default ChevronDownIcon
