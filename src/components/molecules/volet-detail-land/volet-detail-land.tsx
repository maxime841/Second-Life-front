import { Btn } from '@atoms/btns/btn'
import { Carousel } from '@mantine/carousel'
import React, { useState } from 'react'
import { TvoletDetailLand } from './volet-detail-land.type'

export function VoletDetailLand({ houseCurrent }: TvoletDetailLand) {
  const [openMore, setOpenMore] = useState(false)

  const handlerClickOpenDetail = () => {
    setOpenMore(!openMore)
  }

  return (
    <section className='py-8'>
      {/* btn for see party */}
      <div className='flex justify-end px-2 md:px-8'>
        <Btn click={handlerClickOpenDetail}>
          {openMore ? 'Fermer' : 'En savoir plus ...'}
        </Btn>
      </div>

      {openMore ? (
        <div className='px-2 md:px-8 mt-8'>
          {/* info house */}
          <div>
            {/* owner of houses */}
            <div>
              <h4 className='mb-2'>Propriètaire : {houseCurrent.owner}</h4>
            </div>
            {/* date of houses */}
            <div>
              <h4 className='mb-2'>
                Date de début de location :
                {new Date(
                  `${houseCurrent.date_start_rent}`,
                ).toLocaleDateString()}
              </h4>
              <h4 className='mb-2'>
                Date de fin de location :
                {new Date(`${houseCurrent.date_end_rent}`).toLocaleDateString()}
              </h4>
            </div>
          </div>

          {/* images carousel house */}
          <div>
            <h4 className='text-lg md:text-2xl mb-2 mt-4'>Images :</h4>
            <div className='py-4'>
              <Carousel
                sx={{ maxWidth: 550 }}
                mx='auto'
                withIndicators
                dragFree
                align='start'>
                {houseCurrent.pictures?.map(picture => (
                  <Carousel.Slide key={picture.id}>
                    <img src={picture.picture_url} />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
          </div>

          {/* btn close house */}
          <div className='flex justify-end px-2 md:px-8 mt-16'>
            <a href={`#${houseCurrent.id}${houseCurrent.name}`}>
              <Btn click={handlerClickOpenDetail}>
                {openMore ? 'Fermer' : 'En savoir plus ...'}
              </Btn>
            </a>
          </div>
        </div>
      ) : null}
    </section>
  )
}
