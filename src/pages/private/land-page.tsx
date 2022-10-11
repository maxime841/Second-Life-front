import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import React from 'react'

export function LandPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes terrains</TitlePagePrivate>

      {/* section lands */}
      <div className='mt-8'>
        mes land
      </div>
    </section>
  )
}
