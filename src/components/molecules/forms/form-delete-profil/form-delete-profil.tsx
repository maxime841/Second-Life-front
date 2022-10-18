import { Btn } from '@atoms/btns/btn'
import { ErrorText } from '@atoms/errors/error-text'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import React from 'react'

export function FormDeleteProfil(id: string) {
  const { error } = Store.user.useDeleteProfil(id)

    const handlerOnSubDeleteProfil = async (e: any) => {
      e.preventDefault()
      Store.user.deleteProfil(id)
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
