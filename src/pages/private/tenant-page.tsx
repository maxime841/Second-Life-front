import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import React from 'react'

export function TenantPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes locataires</TitlePagePrivate>

      {/* section tenants */}
      <div className='mt-8'>
        mes locataires
      </div>
    </section>
  )
}
