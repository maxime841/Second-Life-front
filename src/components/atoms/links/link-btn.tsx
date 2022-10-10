import React from 'react'
import { TLink } from '@types-app/link.type'
import { NavLink } from 'react-router-dom'

function LinkBtn({
  children,
  link,
  addClass,
  bg,
  click,
  hoverBg,
  padding,
  rounded,
  textColor,
}: TLink) {
  return (
    <NavLink
      to={link}
      onClick={click}
      end
      className={({ isActive }) =>
        isActive
          ? `
          ${textColor ?? 'hover:text-action'}
          ${addClass}
          ${padding ?? 'py-2 px-3 lg:py-4 lg:px-5'}
          ${bg ?? 'bg-action-bg-hover'}
          ${rounded ?? 'rounded-lg'}
          ${hoverBg ?? 'hover:bg-action-bg-hover'}
          flex items-center justify-center
          text-action
          text-base
          leading-tight
          w-fit
          h-fit
          `
          : `
          ${textColor ?? 'hover:text-action'}
          ${addClass}
          ${padding ?? 'py-2 px-3 lg:py-4 lg:px-5'}
          ${bg ?? 'bg-fond_color_button'}
          ${rounded ?? 'rounded-lg'}
          ${hoverBg ?? 'hover:bg-action-bg-hover'}
          flex items-center justify-center
          text-black
          text-base
          leading-tight
          w-fit
          h-fit
          `
      }>
      {children}
    </NavLink>
  )
}

export default LinkBtn
