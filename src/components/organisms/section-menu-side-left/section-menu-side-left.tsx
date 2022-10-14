import { Divisor } from '@atoms/divisors/divisor'
import { EdivisorSize } from '@atoms/divisors/divisor.type'
import { LinkPrimary } from '@atoms/links/link-primary/link-primary'
import BtnIconMenuBurgerOffice from '@molecules/btns/btn-burger-office'
import React from 'react'
import { NavLink } from 'react-router-dom'

export function SectionMenuSideLeft() {
  return (
    <section className='relative'>
      <div className='absolute top-0 left-0'>
        <BtnIconMenuBurgerOffice />
      </div>
      <nav className='w-0 hidden md:block sm:w-52 bg-fond-cards dark:bg-fond-dark-cards top-0 min-h-full text-black'>
        <ul>
          <li>
            <LinkPrimary link='/dashboard'>Tableau de bord</LinkPrimary>
          </li>
        </ul>

        {/* divisor */}
        <Divisor sizeModel={EdivisorSize.L} />

        {/* cat land */}
        <ul>
          <li>
            <NavLink
              to='/lands'
              className='block py-3 pl-4 text-lg hover:bg-fond-dark-cards dark:hover:bg-fond-cards w-full'>
              Terrain
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/houses'
              className='block py-3 pl-4 text-lg hover:bg-fond-dark-cards dark:hover:bg-fond-cards w-full'>
              Maisons
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/tenants'
              className='block py-3 pl-4 text-lg hover:bg-fond-dark-cards dark:hover:bg-fond-cards w-full'>
              Locataires
            </NavLink>
          </li>
        </ul>

        {/* divisor */}
        <Divisor sizeModel={EdivisorSize.L} />

        {/* cat club */}
        <ul>
          <li>
            <NavLink
              to='/clubs'
              className='block py-3 pl-4 text-lg hover:bg-fond-dark-cards dark:hover:bg-fond-cards w-full'>
              clubs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/djs'
              className='block py-3 pl-4 text-lg hover:bg-fond-dark-cards dark:hover:bg-fond-cards w-full'>
              Djs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/dancers'
              className='block py-3 pl-4 text-lg hover:bg-fond-dark-cards dark:hover:bg-fond-cards w-full'>
              Danseurs
            </NavLink>
          </li>
        </ul>

        {/* divisor */}
        <Divisor sizeModel={EdivisorSize.L} />

        {/* cat user */}
        <ul>
          <li>
            <NavLink
              to='/users'
              className='block py-3 pl-4 text-lg hover:bg-fond-dark-cards dark:hover:bg-fond-cards w-full'>
              Utilisateurs
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  )
}
