import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import React from 'react'

export function DjPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes djs</TitlePagePrivate>

      {/* section djs */}
      <div className='mt-8'>
        mes djs
      </div>
    </section>
  )
}
