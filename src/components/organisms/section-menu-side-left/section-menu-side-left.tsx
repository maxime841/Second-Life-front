import { Divisor } from '@atoms/divisors/divisor'
import { EdivisorSize } from '@atoms/divisors/divisor.type'
import { LinkPrimary } from '@atoms/links/link-primary/link-primary'
import React from 'react'
import { NavLink } from 'react-router-dom'

export function SectionMenuSideLeft() {
  return (
    <nav className='flex-none w-52 bg-fond-cards dark:bg-fond-dark-cards top-0 max-h-screen text-black'>
      <ul>
        <li>
          <LinkPrimary link='/'>Tableau de bord</LinkPrimary>
        </li>
      </ul>

      {/* divisor */}
      <Divisor sizeModel={EdivisorSize.L} />

      {/* cat land */}
      <ul>
        <li>
          <NavLink
            to='/'
            className='block py-3 pl-4 text-lg hover:bg-fond-dark-cards dark:hover:bg-fond-cards w-full'>
            Terrain
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className='block pl-4 text-lg hover:bg-fond-dark-cards dark:hover:bg-fond-cards w-full'>
            Vfdsffgfd
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className='block pl-4 text-lg hover:bg-fond-dark-cards dark:hover:bg-fond-cards w-full'>
            Sfdggdhd
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className='block pl-4 text-lg hover:bg-fond-dark-cards dark:hover:bg-fond-cards w-full'>
            Tsfsdfdsferrain
          </NavLink>
        </li>
      </ul>

      {/* divisor */}
      <Divisor sizeModel={EdivisorSize.L} />

      {/* cat club */}
      <ul>
        <li>
          <a>sdf</a>
        </li>
        <li>
          <a>dfsdfsd</a>
        </li>
      </ul>
    </nav>
  )
}
