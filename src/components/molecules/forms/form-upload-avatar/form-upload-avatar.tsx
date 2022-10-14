import { Btn } from '@atoms/btns/btn'
import { PencilIcon } from '@atoms/icons/pencil-icon'
import { Store } from '@store/store'
import React, { useState } from 'react'

export function FormUploadAvatar() {
  const handlerOnSub = async (e: any) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('avatar', e.target.files[0])
    await Store.user.updatePicture(formData)
  }

  return (
    <form className='absolute -right-0 -bottom-0'>
      {/* input file */}
      <label className='relative'>
        <div className='p-2 rounded-full bg-gray-100 w-fit'>
          <PencilIcon size='w-4 h-4' />
        </div>
        <input
          className='hidden'
          type='file'
          onChange={handlerOnSub}
          required
        />
      </label>
      {/* btn sub */}
    </form>
  )
}
