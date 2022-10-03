import React, { useState } from 'react'
import Btn from '@atoms/btns/btn-icon'
import { TBtn } from '@types-app/btn.type'

/**
 * btn card for open panel
 * @returns
 */
function BtnCard ({ club, addClass }: TBtn) {
  const [btnCard, setBtnCard] = useState(false)
  console.log('club', club)

  return (
    <div>
      <Btn
        addClass={addClass}
        click={() => setBtnCard(!btnCard)}
      >
        En savoir plus
      </Btn>
      {
        btnCard ? (
          <div className='w-fit h-fit text-center'>
            <h1>Nom: {club?.name}</h1>
            <h2>Propriétaire: {club?.owner}</h2>
            <p>presentation du club</p>
            <article>flyers: {club?.pictures}</article>
          </div>

        ) : null
      }
    </div>
  )
}

export default BtnCard
