import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'

export function LandPage () {
  const { idLand } = useParams()
  const land = Store.land.useLand(idLand!)

  return (
    <section>
      <h1 className='text-center font-title text-3xl'>{land.name}</h1>
      <div className='flex justify-center'>
        <p className={`font-text
                    text-justify
                    border-2
                    border-none
                    bg-fond-cards
                    w-fit
                    p-5
                    mt-8
                    mb-8
                    rounded-lg`}>
          {land.description}
        </p>
      </div>
      <article className='flex flex-wrap sm:justify-center items-center'>
        {
          land.id
            ? land.houses?.map(house => {
              return (
                <div key={house.name} className='card w-96 bg-fond-cards shadow-xl mx-4 my-4'>
                  <figure><img src='https://placeimg.com/400/225/arch' alt='Présentation de la maison' /></figure>
                  <div className='card-body'>
                    <h2 className='card-title'>{house.name}</h2>
                    <p>{house.presentation}</p>
                    <div className='card-actions justify-end'>
                      <button className='btn bg-fond_color_button border-none hover:bg-action-bg-hover text-black'>En savoir plus</button>
                    </div>
                  </div>
                </div>
              )
            })
            : <p>Loading ...</p>
        }
      </article>
    </section>
  )
}
