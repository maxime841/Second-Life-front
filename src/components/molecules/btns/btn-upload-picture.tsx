import React from 'react'
import { Store } from '@store/store'
import { TbtnUploadPicture } from '@types-app/btn.type'
import { Btn } from '@atoms/btns/btn'

/**
 * btn dark mode with change icon moon or sun
 * @returns
 */
export function BtnUploadPicture({ children, addClass }: TbtnUploadPicture) {
  return (
    <Btn
      addClass={addClass}
      click={() => Store.user.useUpdatePicture}>
    {children}
    </Btn>
  )
}
