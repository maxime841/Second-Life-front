import React, { useState } from 'react'
import { IClub } from '@types-app/club.type'
import { Btn } from '@atoms/btns/btn'

/**
 * btn card for open panel
 * @returns
 */
function BtnCard ({ club }: IClub) {
  const [openVolet, setOpenVolet] = useState(false)

  function handlerClickBtn() {
    setOpenVolet(!openVolet)
  }

  return (
    <div>
      <Btn
        click={handlerClickBtn}
      >
        En savoir plus
      </Btn>
      {
        openVolet ? (
          <article>
            <p className='font-text text-justify border-2 border-none bg-fond-cards w-fit p-5 mt-8 mb-8 rounded-lg'>
              {club?.presentation}</p>
            <div className='carousel w-full'>
              {
                club?.pictures?.map(party => {
                    return (
                      <div key={party.id} id={`slide ${party?.id}`} className='carousel-item relative w-full'>
                        <img src={party.picture_url} className='w-full' alt='presentation dy flyers du club' /><div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                          <a href={`slide ${party.id ? -1 : Number}`} className='btn btn-circle'>❮</a>
                          <a href={`slide ${party.id ? +1 : Number}`} className='btn btn-circle'>❯</a>
                        </div>
                      </div>
                    )
                  })
                }

            </div>
          </article>

        ) : null
      }
    </div>
  )
}

export default BtnCard
