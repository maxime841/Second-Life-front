import { StatClub } from '@molecules/stats/stat-club/stat-club'
import { StatLand } from '@molecules/stats/stat-land/stat-land'
import React from 'react'

export function SectionStatDashboard() {
  return (
    <section>
      {/* stat land */}
      <StatLand />

      {/* stat club */}
      <div className='mt-8'>
        <StatClub />
      </div>
    </section>
  )
}
