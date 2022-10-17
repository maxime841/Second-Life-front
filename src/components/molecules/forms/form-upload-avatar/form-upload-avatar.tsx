import { PencilIcon } from '@atoms/icons/pencil-icon'
import { Store } from '@store/store'
import React from 'react'

export function FormUploadAvatar() {
  const handlerOnSub = async (e: any) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('avatar', e.target.files[0])
    await Store.user.updatePicture(formData)
  }

  return (
    <form className='absolute sm:ml-52 -mt-16 lg:ml-[355px]'>
      {/* input file */}
      <label className=''>
        <div className='p-2 rounded-full bg-gray-100 w-fit'>
          <PencilIcon size='w-4 h-4' />
        </div>
         {/* btn sub */}
        <input
          className='hidden'
          type='file'
          onChange={handlerOnSub}
          required
        />
      </label>
    </form>
  )
}
