import React, { useState } from 'react'
import { Btn } from '@atoms/btns/btn'
import { TbtnCard } from '@types-app/btn.type'

/**
 * btn card for open panel
 * @returns
 */
function BtnCard({ club }: TbtnCard) {
  const [openVolet, setOpenVolet] = useState(false)
  let [slide, setSlide] = useState(0)

  function handlerClickBtn() {
    setOpenVolet(!openVolet)
  }

  function handleLeftClick() {
    setSlide((slide = slide - 1))
    console.log('mon setSlide left', setSlide, slide)
  }

  function handleRightClick() {
    setSlide((slide = slide + 1))
    console.log('mon setSlide right', setSlide, slide)
  }

  return (
    <div>
      <Btn click={handlerClickBtn}>En savoir plus</Btn>
      {openVolet ? (
        <article>
          <p className='font-text text-justify border-2 border-none bg-fond-cards w-fit p-5 mt-8 mb-8 rounded-lg'>
            {club?.presentation}
          </p>
          <div className='carousel w-full'>
            {club?.parties?.map(party => {
              return (
                <div
                  key={party.id}
                  id={`slide ${party.id}`}
                  className='carousel-item relative w-full'>
                  <img
                    src={party.picture_favoris?.picture_url}
                    className='w-full'
                    alt='presentation du flyers du club'
                  />
                  <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                    <button
                      onClick={handleLeftClick}
                      className='btn btn-circle'>
                      ❮
                    </button>
                    <button
                      onClick={handleRightClick}
                      className='btn btn-circle'>
                      ❯
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </article>
      ) : null}
    </div>
  )
}

export default BtnCard
