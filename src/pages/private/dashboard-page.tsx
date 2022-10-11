import LinkBtn from '@atoms/links/link-btn'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { SectionStatDashboard } from '@organisms/section-stat-dashboard/section-stat-dashboard'
import { Store } from '@store/store'
import React from 'react'

export function DashboardPage() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Tableau de bord</TitlePagePrivate>

      {/* section stats */}
      <div className='mt-8'>
        <SectionStatDashboard />
      </div>
    </section>
  )
}
