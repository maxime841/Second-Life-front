import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import React from 'react'

export function UserPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes utilisateurs</TitlePagePrivate>

      {/* section users */}
      <div className='mt-8'>
        mes utilisateurs
      </div>
    </section>
  )
}
