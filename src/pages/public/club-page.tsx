import React from 'react'
import { Store } from '@store/store'
import Btn from '@atoms/btns/btn'

function ClubPage () {
  const open = Store.clubPanel.useClubPanel()
  const clubs = Store.club.useClubs()
  const buttons = Array.from(document.querySelectorAll('.btn'))

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
                  {
                    buttons.map(button => {
                      return (
                        <Btn
                          key={button.id}
                          click={() => Store.clubPanel.toggleStateClubPanel(open)}
                          // className='btn bg-fond_color_button border-none hover:bg-action-bg-hover text-black'
                        >
                          En savoir plus
                        </Btn>
                      )
                    })
                  }

                  {/* card club */}
                  {
                    open ? (
                      <div className='w-96 h-96'>
                        {club.name}
                      </div>
                    ) : null
                  }
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
