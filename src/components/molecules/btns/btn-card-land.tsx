import React, { useState } from 'react'
import { Btn } from '@atoms/btns/btn'
import { TbtnCardLand } from '@types-app/btn.type'

/**
 * btn card for open panel
 * @returns
 */
function BtnCardLand({ land }: TbtnCardLand) {
  const [openVolet, setOpenVolet] = useState(false)

  function handlerClickBtn() {
    setOpenVolet(!openVolet)
  }

  return (
    <div>
      <Btn click={handlerClickBtn}>En savoir plus</Btn>
      {openVolet ? (
        <article>
          {/* pres club */}
          <h3 className='mt-4 font-bold'>Présentation de la maison :</h3>
          <p className='font-text text-justify border-2 border-none bg-fond-cards w-fit p-5 rounded-lg'>
            {land?.presentation}
          </p>

          {/* house of land */}
          {land?.houses?.map(house => (
            <div key={house.id} className='mb-6'>
              {/* title */}
              <h3>
                <span className='font-bold'>Maison : </span>
                {house.name}
              </h3>
              <p>
                <span className='font-bold'>Propriètaire : </span> {house.owner}
              </p>
              <p>
                <span className='font-bold'>Date de début de location: </span>
                {`${new Date(`${house.date_start_rent}`).toLocaleDateString()}`}
              </p>
              <p>
                <span className='font-bold'>Date de fin de location: </span>
                {`${new Date(`${house.date_end_rent}`).toLocaleDateString()}`}
              </p>
              <h3 className='font-bold'>Images :</h3>
              <div id={`land ${land.name} et house ${house.name}`} className='carousel w-full'>
                {house?.pictures?.map((picture, index) => (
                  <div
                    key={picture.id}
                    id={`${index}`}
                    className='carousel-item relative w-full'>
                    <img
                      src={picture.picture_url}
                      className='w-full h-full'
                    />
                    <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                      <a
                        href={`#${
                          index === 0 ? house.pictures?.length! - 1 : index - 1
                        }`}
                        className='btn btn-circle'>
                        ❮
                      </a>
                      <a
                        href={`#${
                          index === house.pictures?.length! - 1
                            ? index + 1 - house.pictures?.length!
                            : index + 1
                        }`}
                        className='btn btn-circle'>
                        ❯
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </article>
      ) : null}
    </div>
  )
}

export default BtnCardLand
