import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'
import FormResetPassword from '@molecules/forms/form-reset-password/form-reset-password'
import React from 'react'

export function SectionResetPassword() {
  return (
    <ContainerPrimary addClass='mx-auto' model={EmodelContainer.l}>
      <FormResetPassword />
    </ContainerPrimary>
  )
}
