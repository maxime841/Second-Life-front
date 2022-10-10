import Title from '@atoms/title/title'
import { CardClub } from '@molecules/cards/card-club/card-club'
import React from 'react'
import './section-list-club.css'

export function SectionListClub() {
  return (
    <section>
      <Title addClass='mb-8 font-bold text-3xl'>Liste des clubs</Title>
      <div className='club-list-box'>
        <CardClub />
      </div>
    </section>
  )
}
