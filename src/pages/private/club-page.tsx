import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import React from 'react'

export function ClubPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mon club</TitlePagePrivate>

      {/* section club */}
      <div className='mt-8'>
        mon club
      </div>
    </section>
  )
}
