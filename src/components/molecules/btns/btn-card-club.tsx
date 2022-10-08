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
    <div>
      <Btn click={handlerClickBtn}>En savoir plus</Btn>
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
              <h3 className='font-bold'>Images :</h3>
              <div id={`club ${club.name} et party ${party.name}`} className='carousel w-full'>
                {party.pictures?.map((picture, index) => (
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
                          index === 0 ? party.pictures?.length! - 1 : index - 1
                        }`}
                        className='btn btn-circle'>
                        ❮
                      </a>
                      <a
                        href={`#${
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
          ))}
        </article>
      ) : null}
    </div>
  )
}

export default BtnCardClub
