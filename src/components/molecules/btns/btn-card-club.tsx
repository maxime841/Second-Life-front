import React, { useState } from 'react'
import { Btn } from '@atoms/btns/btn'
import { TbtnCardClub } from '@types-app/btn.type'

/**
 * btn card for open panel
 * @returns
 */
function BtnCardClub({ club }: TbtnCardClub) {
  const [openVolet, setOpenVolet] = useState(false)

  function handlerClickBtn() {
    setOpenVolet(!openVolet)
  }

  return (
    <>
      <Btn addClass='mt-8' click={handlerClickBtn}>
        En savoir plus
      </Btn>
      {openVolet ? (
        <article>
          {/* pres club */}
          <h3 className='mt-4 font-bold'>Présentation du club :</h3>
          <p className='font-text text-justify border-2 border-none bg-fond-cards w-fit p-5 rounded-lg'>
            {club?.presentation}
          </p>

          {/* party of club */}
          {club?.parties?.map(party => (
            <div key={party.id} className='mb-6'>
              {/* title */}
              <h3>
                <span className='font-bold'>Party : </span>
                {party.name}
              </h3>
              <p>
                <span className='font-bold'>Propriètaire : </span> {party.owner}
              </p>
              <p>
                <span className='font-bold'>Date : </span>
                {`${new Date(`${party.date_party}`).toLocaleDateString()}`}
              </p>

              {/* image */}
              <h3 className='font-bold'>Images :</h3>
              <div className='relative overflow-x-auto"'>
                <div className='flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden'>
                  <div className='carousel w-full relative'>
                    {party.pictures?.map((picture, index) => (
                      <div
                        key={picture.id}
                        id={`${party.id}-${index}`}
                        className='carousel-item relative w-full'>
                        <img
                          src={picture.picture_url}
                          className='w-full h-full'
                        />
                        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                          <a
                            href={`#${party.id}-${
                              index === 0
                                ? party.pictures?.length! - 1
                                : index - 1
                            }`}
                            className='btn btn-circle'>
                            ❮
                          </a>
                          <a
                            href={`#${party.id}-${
                              index === party.pictures?.length! - 1
                                ? index + 1 - party.pictures?.length!
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
              </div>
            </div>
          ))}
        </article>
      ) : null}
    </>
  )
}

export default BtnCardClub
