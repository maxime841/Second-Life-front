import { TitleState } from '@atoms/title/title-stat/title-stat'
import { FormUploadAvatar } from '@molecules/forms/form-upload-avatar/form-upload-avatar'
import { VoletDetailProfilUpdate } from '@molecules/volet-detail-profil-update/volet-detail-profil-update'
import { VoletDetailProfilDelete } from '@molecules/volet-profil-delete/volet-profil-delete'
import { VoletDetailProfilPasswordUpdate } from '@molecules/volet-profil-password-update/volet-profil-password-update'
import { Store } from '@store/store'
import React, { useState } from 'react'

export function CardProfil() {
    const user = Store.user.useUserCurrent()
    return (
<article className='width sm:w-96 md:w-[400px] lg:w-[700px] mx-auto mt-12 border-2 border-black p-4 rounded-lg'>
          <TitleState addClass='sm:text-2xl md:text-3xl lg:text-4xl'>Mes informations</TitleState>
                {/* display avatar */}
            <div className='my-16'>
              <img
                className='w-28 h-28 rounded-full mx-auto my-8'
                src={`${
                 user.picture
                  ? `http://localhost:8000/${user.picture.picture_url}`
                  : 'https://ui-avatars.com/api/?background=0D8ABC&color=fff'
                }`}
                />
                {/* form avatar */}
              <FormUploadAvatar />
              <p className='mb-8'>{user.name}</p>
            </div>
            <nav className='flex'>
            {/* volet detail profil update */}
            <VoletDetailProfilUpdate userCurrent={user} />
            {/* volet detail profil update */}
            <VoletDetailProfilPasswordUpdate userCurrent={user} />
            {/* volet detail profil update */}
            <VoletDetailProfilDelete userCurrent={user} />
            </nav>
          </article>
    )
}
