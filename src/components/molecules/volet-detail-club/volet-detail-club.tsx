import { Btn } from '@atoms/btns/btn'
import { Carousel } from '@mantine/carousel'
import React, { useState } from 'react'
import { TvoletDetailClub } from './volet-detail-club.type'

export function VoletDetailClub({ clubCurrent }: TvoletDetailClub) {
  const [openMore, setOpenMore] = useState(false)

  const setting = {
    dots: true,
  }

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

      {/* detail club */}
      {openMore ? (
        <div className='px-2 md:px-8 mt-8'>
          {/* presentation club */}
          <div>
            <h4 className='font-bold text-lg md:text-2xl mb-2'>
              Présentation :
            </h4>
            <p className='text-base md:text-lg text-justify'>
              {clubCurrent.presentation}
            </p>
          </div>

          {/* image club */}
          <div>
            <h4 className='text-lg md:text-2xl mb-2 mt-4'>Images :</h4>

            {/* carousel image club */}
            <div className='px-8 py-4'>
              <Carousel
                sx={{ maxWidth: 550 }}
                mx='auto'
                withIndicators
                dragFree
                align='start'>
                {clubCurrent.pictures?.map(picture => (
                  <Carousel.Slide key={picture.id}>
                    <img src={picture.picture_url} />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
          </div>

          {/* info detail parties's club */}
          <div>
            {clubCurrent.parties?.map(party => (
              <div key={party.id} className='mt-12'>
                {/* name of party */}
                <div>
                  <h4 className='font-bold text-lg md:text-2xl mb-2'>
                    Partie {party.name}
                  </h4>
                </div>

                {/* owner of party */}
                <div>
                  <h4 className='mb-2'>Propriètaire : {party.owner}</h4>
                </div>

                {/* date of party */}
                <div>
                  <h4 className='mb-2'>
                    Date :{' '}
                    {new Date(`${party.date_party}`).toLocaleDateString()}
                  </h4>
                </div>

                {/* images party */}
                <div>
                  <h4 className='text-lg md:text-2xl mb-2 mt-4'>Images :</h4>
                  <div className='py-4'>
                    <Carousel
                      sx={{ maxWidth: 550 }}
                      mx='auto'
                      withIndicators
                      dragFree
                      align='start'>
                      {party.pictures?.map(picture => (
                        <Carousel.Slide key={picture.id}>
                          <img src={picture.picture_url} />
                        </Carousel.Slide>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* btn for see party */}
          <div className='flex justify-end px-2 md:px-8 mt-16'>
            <a href={`#${clubCurrent.id}${clubCurrent.name}`}>
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
