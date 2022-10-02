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
    <Btn
      addClass={addClass}
      click={() => setBtnCard(!btnCard)}
      // className='btn bg-fond_color_button border-none hover:bg-action-bg-hover text-black'
    >
      En savoir plus
    </Btn>

  )
}

export default BtnCard
