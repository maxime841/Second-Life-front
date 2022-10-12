import React from 'react'
import { NavLink } from 'react-router-dom'
import { TlinkPrimary } from './link-primary.type'
import './link-primary.css'

export function LinkPrimary({ children, link, addClass, bg }: TlinkPrimary) {
  return (
    <NavLink to={link} className={({ isActive }) =>
    isActive
      ? `link-primary-app 
      ${addClass}
      ${bg ?? 'bg-action-bg-hover bg-fond-cards dark:bg-fond-dark-cards'}
      flex-none 
      w-52  
      top-0 
      max-h-screen 
      text-black`
      : `
      link-primary-app 
      ${addClass}
      ${bg ?? 'bg-fond-cards dark:bg-fond-dark-cards bg-fond-cards dark:bg-fond-dark-cards'}
      flex-none 
      w-52  
      top-0 
      max-h-screen 
      text-black`} end>
      {children}
    </NavLink>
  )
}
