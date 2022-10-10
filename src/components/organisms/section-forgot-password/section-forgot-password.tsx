import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'
import { FormForgotPassword } from '@molecules/forms/form-forgot-password/form-forgot-password'
import React from 'react'

export default function SectionForgotPassword() {
  return (
    <ContainerPrimary addClass='mx-auto' model={EmodelContainer.l}>
      <FormForgotPassword />
    </ContainerPrimary>
  )
}
