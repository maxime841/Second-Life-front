import { Btn } from '@atoms/btns/btn'
import { LinkPrimary } from '@atoms/links/link-primary/link-primary'
import { Store } from '@store/store'
import React from 'react'
import users from '../../../assets/user-profil.jpg'
import './menu-side-left-profil.css'

export function SectionMenuSideLeftProfil() {
    const user = Store.user.useUserCurrent()

return (
    <nav className='menu-side-left-profil'>
      <ul>
        {
          user
        ? <img src={user.avatar} alt='presentation avatar user' className='w-56 h-52 p-8 rounded-full' />
        : !user
        ? <img src={users} alt='presentation avatar user' className='w-56 h-52 p-8 rounded-full' />
        : null
        }
        {
        <LinkPrimary link='/user/profil'>Mes informations</LinkPrimary>
         ? <Btn addClass='ml-5'>Ajouter ma photo</Btn>
        : <LinkPrimary link='/user/profil/update'>Modifier mon compte</LinkPrimary>
         ? <Btn addClass='ml-5'>Modifier ma photo</Btn>
        : null
        }
        <li className='mt-4'>
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
