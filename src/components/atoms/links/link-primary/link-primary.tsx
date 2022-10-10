import React from 'react'
import { NavLink } from 'react-router-dom'
import { TlinkPrimary } from './link-primary.type'
import './link-primary.css'

export function LinkPrimary({ children, link, addClass }: TlinkPrimary) {
  return (
    <NavLink to={link} className={`link-primary-app ${addClass}`} end>
      {children}
    </NavLink>
  )
}
