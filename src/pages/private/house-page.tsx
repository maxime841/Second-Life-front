import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import React from 'react'

export function HousePageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes maisons</TitlePagePrivate>

      {/* section houses */}
      <div className='mt-8'>
        mes maisons
      </div>
    </section>
  )
}
