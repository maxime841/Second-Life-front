import { Btn } from '@atoms/btns/btn'
import { ErrorText } from '@atoms/errors/error-text'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import { Iuser } from '@types-app/models/user.model'
import React, { useEffect, useState } from 'react'

export function FormDeleteProfil(profil: Iuser) {
  const { error } = Store.user.useDeleteProfil(profil)
  const userCurrent = Store.user.useUserCurrent()
  const [deleteProfil, setDeleteProfil] = useState(false)

  useEffect(() => {
    setDeleteProfil(userCurrent.deleteProfil!)
  }, [userCurrent])

    const handlerOnSubDeleteProfil = async (e: any) => {
      e.preventDefault()
      Store.user.deleteProfil(profil)
    }

  return (
    <form onSubmit={handlerOnSubDeleteProfil}>
     <LabelPrimary>Suppresion du profil ?: </LabelPrimary>
            <Btn>Confirmer</Btn>

      {/* error text */}
      <ErrorText position='text-center sm:text-left'>{error}</ErrorText>
    </form>
  )
}
