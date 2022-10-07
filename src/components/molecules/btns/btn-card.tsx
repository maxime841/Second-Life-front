import React, { useEffect, useState } from 'react'
import { Btn } from '@atoms/btns/btn'
import { TbtnCard } from '@types-app/btn.type'

/**
 * btn card for open panel
 * @returns
 */
function BtnCard({ club }: TbtnCard) {
  const pictures = club?.parties?.map(party => party?.pictures?.map(picture => picture.picture_url))
  console.log('mes images', pictures)

  const mod = (n: number, m: number) => {
    const result = n % m

    // Return a positive value
    return result >= 0 ? result : result + m
  }

  const [openVolet, setOpenVolet] = useState(false)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
      setSlide((slide % pictures?.length!))
  }, [slide])

  function handlerClickBtn() {
    setOpenVolet(!openVolet)
  }

  function handleLeftClick() {
    setSlide(mod(slide - 1, pictures?.length!))
    console.log('setSlide', setSlide, 'slide', slide)
  }

  function handleRightClick() {
    setSlide(mod(slide + 1, pictures?.length!))
    console.log('setSlide', setSlide, 'slide', slide)
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
                  {
                    club?.parties?.map(party => party?.pictures?.map(picture => {
                      return (
                       <div
                        key={picture.id}
                        id={`slide ${picture.id}`}
                        className='carousel-item relative w-full'>
                          <img
                            src={picture.picture_url}
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
                    }))
                  }
            </div>
        </article>
      ) : null}
    </div>
  )
}

export default BtnCard
