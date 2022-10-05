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
          <div className='w-fit h-fit text-center'>
            <h1>Nom: {club?.name}</h1>
            <h2>Propriétaire: {club?.owner}</h2>
            <p>presentation du club</p>
            <article>flyers: {}</article>
          </div>

        ) : null
      }
    </div>
  )
}

export default BtnCard
