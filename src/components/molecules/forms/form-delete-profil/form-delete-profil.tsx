import { Btn } from '@atoms/btns/btn'
import { ErrorText } from '@atoms/errors/error-text'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import { Iuser } from '@types-app/models/user.model'
import React from 'react'

export function FormDeleteProfil(profil: Iuser) {
  const { error } = Store.user.useDeleteProfil(profil)

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
