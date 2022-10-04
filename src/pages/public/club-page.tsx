import { Store } from '@store/store'
import BtnCard from '@molecules/btns/btn-card'
import React from 'react'

function ClubPage () {
  const clubs = Store.club.useClubs()

  return (
    <section className='flex'>
      <article className='flex flex-wrap sm:justify-center items-center'>
        {
          clubs.map(club => (
            <div key={club.id} className='card w-96 bg-fond-cards shadow-xl mx-4 my-4'>
              <figure><img src='https://placeimg.com/400/225/arch' alt='Présentation du club' /></figure>
              <div className='card-body'>
                <h2 className='card-title font-title'>club: {club.name}</h2>
                <p className='font-text'>Propriétaire: {club.owner}</p>
                <div className='card-actions justify-end'>
                  <BtnCard {...club} />
                </div>
              </div>
            </div>
          ))
        }
      </article>
    </section>
  )
}
export default ClubPage
