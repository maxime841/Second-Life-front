import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'
import BtnCardLand from '@molecules/btns/btn-card-land'
import { VoletDetailLand } from '@molecules/volet-detail-land/volet-detail-land'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'

export function LandPage() {
  const { idLand } = useParams()
  const land = Store.land.useLand(idLand!)

  return (
    <section>
      {/* info land */}
      <h1 className='text-center font-title text-3xl'>{land.name}</h1>
      <p
        className={`
          font-text
          text-justify
          bg-fond-cards
          max-w-lg p-5 mt-8 mb-8 mx-auto
          rounded-lg
        `}>
        {land.description}
      </p>

      {/* cards house */}
      <div className='flex flex-col-reverse items-center sm:items-start sm:flex-row sm:justify-center'>
        <article className='flex flex-col w-full items-center'>
          {land.id ? (
            land.houses?.map(house => {
              return (
                <ContainerPrimary
                  addClass='mb-12'
                  model={EmodelContainer.club}
                  key={house.name}>
                  <img
                    id={`${house.id}${house.name}`}
                    className=' w-full rounded-tl-2xl
                    md:rounded-tl-3xl
                    rounded-tr-2xl
                    md:rounded-tr-3xl'
                    src={house.picture_favoris?.picture_url}
                  />

                  {/* presentation house */}
                  <div className='px-2 py-4 md:px-8 md:py-8'>
                    <h4 className='font-title font-bold text-lg md:text-2xl mb-2'>
                      {house.name}
                    </h4>
                    <h4 className='font-bold text-lg md:text-2xl mb-2'>
                      Présentation de la maison :
                    </h4>
                    <p className='text-base md:text-lg text-justify'>
                      {house.presentation}
                    </p>
                  </div>
                  <VoletDetailLand houseCurrent={house} />
                </ContainerPrimary>
              )
            })
          ) : (
            <p>Loading ...</p>
          )}
        </article>

        {/* Caractéristique land  */}
        <aside className='h-fit border-2 border-black p-5 w-56 sm:ml-4 mb-8'>
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
