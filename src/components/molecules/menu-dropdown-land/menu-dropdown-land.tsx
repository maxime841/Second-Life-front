import Btn from '@atoms/btns/btn'
import ChevronDownIcon from '@atoms/icons/chevron-down-icon'
import LinkText from '@atoms/links/link-text'
import { Store } from '@store/store'
import { TMenuDropdownLand } from '@types-app/menu.type'
import React from 'react'

function MenuDropdownLand ({ children, addClass }: TMenuDropdownLand) {
  const open = Store.app.useStateMenuDropdownLand()

  return (
    <nav className={`relative ${addClass}`}>
      {/* btn dropdown */}
      <Btn click={() => Store.app.toggleStateMenuDropdownLand(open)}>
        <span className='mr-2'>{children}</span>
        <ChevronDownIcon size='w-4 h-4' />
      </Btn>

      {/* menu dropdwon land */}
      {
        open
          ? (
            <ul
              className='
              absolute top-16 left-4 w-64
              p-2 bg-fond_color_button
              rounded-lg
            '
            >
              <li>
                <LinkText link='terrain1'>
                  <span>
                    Terrain1
                  </span>
                </LinkText>
              </li>
              <li>
                <LinkText link='terrain2'>
                  <span>
                    Terraindsd sdsdsdsd
                    <span> 2</span>
                  </span>
                </LinkText>
              </li>
            </ul>
          )
          : null
      }
    </nav>
  )
}

export default MenuDropdownLand
