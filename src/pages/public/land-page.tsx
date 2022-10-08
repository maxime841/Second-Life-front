import BtnCardLand from '@molecules/btns/btn-card-land'
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
      <div className='flex'>
        <article className='flex flex-wrap sm:justify-center items-start'>
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
                         <BtnCardLand land={land} />
                      </div>
                    </div>
                  </div>
                )
              })
              : <p>Loading ...</p>

          }
        </article>
        <aside className='h-fit border-2 border-black p-5 w-56'>
          <h1 className='font-title'>Caractéristique du terrain</h1>
          <ul className='font-text text-start'>
            <li className='mt-4'>Propriétaire:{land.owner}</li>
            <li className='mt-4'>Groupe:{land.group}</li>
            <li className='mt-4'>Prims:{land.prims}</li>
            <li className='mt-4'>Prime restante:{land.remaining_prims}</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
