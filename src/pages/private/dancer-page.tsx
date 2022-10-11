import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import React from 'react'

export function DancerPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes danseurs</TitlePagePrivate>

      {/* section dancers */}
      <div className='mt-8'>
        mes danseurs
      </div>
    </section>
  )
}
