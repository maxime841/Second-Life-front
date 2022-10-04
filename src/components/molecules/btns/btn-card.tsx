import React, { useState } from 'react'
import { IClub } from '@types-app/club.type'
import { Btn } from '@atoms/btns/btn'

/**
 * btn card for open panel
 * @returns
 */
function BtnCard (props: IClub) {
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
            <h1>Nom: {props.name}</h1>
            <h2>Propriétaire: {props.owner}</h2>
            <p>presentation du club</p>
            <article>flyers: {props.pictures}</article>
          </div>

        ) : null
      }
    </div>
  )
}

export default BtnCard
