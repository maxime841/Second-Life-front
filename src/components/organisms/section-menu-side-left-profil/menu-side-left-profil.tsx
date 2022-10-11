import { LinkPrimary } from '@atoms/links/link-primary/link-primary'
import { Store } from '@store/store'
import React from 'react'
export function SectionMenuSideLeftProfil() {
    const user = Store.user.useUserCurrent()
return (
    <nav className='flex-none w-52 bg-fond-cards dark:bg-fond-dark-cards top-0 max-h-screen text-black'>
      <ul>
        <img src={user.avatar} alt='presentation avatar user' className='p-8 rounded-full' />
        <li>
          <LinkPrimary link='/user/profil'>Mes informations</LinkPrimary>
        </li>
        <li>
          <LinkPrimary link='/user/profil/update'>Modifier mon compte</LinkPrimary>
        </li>
        <li>
          <LinkPrimary link='/user/profil/update/password'>Modifier mot de passe</LinkPrimary>
        </li>
      </ul>
    </nav>
    )
}
