import Header from '@organisms/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export function TemplatePrivate() {
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
      <main className='flex-1 px-4 py-4 md:py-8 '>
        <Outlet />
      </main>
    </div>
  )
}
