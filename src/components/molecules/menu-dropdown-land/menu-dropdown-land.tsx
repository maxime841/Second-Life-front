import Btn from '@atoms/btns/btn'
import ChevronDownIcon from '@atoms/icons/chevron-down-icon'
import LinkText from '@atoms/links/link-text'
import { Store } from '@store/store'
import { TMenuDropdownLand } from '@types-app/menu.type'
import React from 'react'
import { TLand } from '@types-app/land.type'

function MenuDropdownLand({ children, addClass }: TMenuDropdownLand) {
  const open = Store.app.useStateMenuDropdownLand()
  const lands = Store.land.useLand()

  return (
    <nav className={`relative ${addClass}`}>
      {/* btn dropdown */}
      <Btn click={() => Store.app.toggleStateMenuDropdownLand(open)}>
        <span className='mr-2'>{children}</span>
        <ChevronDownIcon size='w-4 h-4' />
      </Btn>

      {/* menu dropdwon land */}
      {open ? (
        <ul
          className='
              absolute top-16 left-4 w-64
              p-2 bg-fond_color_button
              rounded-lg
            '>
          {(lands as unknown as TLand[]).map((land: any) => (
            <li key={land.id}>
              <LinkText link={`/land/${land.id}`}>
                <span>{land.name}</span>
              </LinkText>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  )
}

export default MenuDropdownLand
