import React, { useState } from 'react'
import Btn from '@atoms/btns/btn-icon'
import { TBtnCard } from '@types-app/btn.type'

/**
 * btn card for open panel
 * @returns
 */
function BtnCard ({ addClass }: TBtnCard) {
  const [btnCard, setBtnCard] = useState(false)

  return (
    <div>
      <Btn
        addClass={addClass}
        click={() => setBtnCard(!btnCard)}
        addClass='btn bg-fond_color_button border-none hover:bg-action-bg-hover text-black rounded-lg'
      >
        En savoir plus
      </Btn>
      {
        btnCard ? (
          <div className='w-96 h-96'>
            {}
          </div>

        ) : null
      }
    </div>
  )
}

export default BtnCard
