import React from 'react'
import { Store } from '@store/store'
import { Btn } from '@atoms/btns/btn'
import { TBtnMenuBurger } from '@types-app/btn.type'
import MenuBurgerIcon from '@atoms/icons/burger-icon'
import LinkBtn from '@atoms/links/link-btn'

/**
 * btn dark mode with change icon moon or sun
 * @returns
 */
function BtnIconMenuBurgerOffice({ addClass }: TBtnMenuBurger) {
  const menuBurgerOffice = Store.menuBurger.useBurgerMenuOffice()

  return (
    <div className={`p-4 relative display sm:flex md:hidden ${addClass}`}>
      {/* btn dropdown */}
      <Btn
        bg=''
        click={() =>
          Store.menuBurger.toggleStateMenuBurgerOffice(menuBurgerOffice)
        }>
        <MenuBurgerIcon color='bg-white' size='w-4 h-4' />
      </Btn>

      {/* menu burger */}
      {menuBurgerOffice ? (
        <ul
          className={`flex-col items-center justify-around display sm:flex md:invisible absolute top-16 left-4 w-32
          p-2 bg-fond_color_button
          rounded-lg z-10`}>
          {/* link dashboard */}
          <li>
            <LinkBtn link='/dashboard'>
              <span className='ml-2'>Tableau de bord</span>
            </LinkBtn>
          </li>
          {/* link lands */}
          <li className='mt-2'>
            <LinkBtn link='/lands'>
              <span className='ml-2'>Terrains</span>
            </LinkBtn>
          </li>
          {/* link houses */}
          <li className='mt-2'>
            <LinkBtn link='/houses'>
              <span className='ml-2'>Maisons</span>
            </LinkBtn>
          </li>
          {/* link tenants */}
          <li className='mt-2'>
            <LinkBtn link='/tenants'>
              <span className='ml-2'>Locataires</span>
            </LinkBtn>
          </li>
          {/* link clubs */}
          <li className='mt-2'>
            <LinkBtn link='/clubs'>
              <span className='ml-2'>Clubs</span>
            </LinkBtn>
          </li>
          {/* link djs */}
          <li className='mt-2'>
            <LinkBtn link='/djs'>
              <span className='ml-2'>Djs</span>
            </LinkBtn>
          </li>
          {/* link dancers */}
          <li className='mt-2'>
            <LinkBtn link='/dancers'>
              <span className='ml-2'>Danceurs</span>
            </LinkBtn>
          </li>
          {/* link users */}
          <li className='mt-2'>
            <LinkBtn link='/users'>
              <span className='ml-2'>Utilisateurs</span>
            </LinkBtn>
          </li>
        </ul>
      ) : null}
    </div>
  )
}

export default BtnIconMenuBurgerOffice
