import { Store } from '@store/store'
import BtnCard from '@molecules/btns/btn-card'
import React from 'react'

function ClubPage() {
  const clubs = Store.club.useClubs()

  return (
    <section className=''>
      <article className='flex flex-wrap justify-start'>
        {clubs.map(club => (
          <div
            key={club.id}
            className='mx-2 my-2 max-w-sm bg-fond-cards shadow-xl'>
            <figure>
              <img
                src='https://placeimg.com/400/225/arch'
                alt='Présentation du club'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title font-title'>club: {club.name}</h2>
              <p className='font-text'>Propriétaire: {club.owner}</p>
              <div className='card-actions justify-end'>
                <BtnCard club={club} />
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}
export default ClubPage
