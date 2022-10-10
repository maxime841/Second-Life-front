import Header from '@organisms/header'
import { SectionMenuSideLeft } from '@organisms/section-menu-side-left/section-menu-side-left'
import { Store } from '@store/store'
import React from 'react'
import { Outlet } from 'react-router-dom'

export function TemplatePrivate() {
  const userCurrent = Store.user.useUserCurrent()

  return (
    <div
      className='
      flex
      flex-col
      min-h-screen
      bg-fond_claire
      dark:bg-fond_dark
      text-black
      dark:text-white
  '>
      {/* header */}
      <Header />

      {/* main */}
      <main className='flex-1 flex '>
        {/* section menu side left */}
        {userCurrent ? (
          userCurrent.role?.libelle !== 'public' ? (
            <SectionMenuSideLeft />
          ) : null
        ) : null}

        {/* section principal */}
        <section className='flex-1 px-4 py-8'>
          <Outlet />
        </section>
      </main>
    </div>
  )
}
