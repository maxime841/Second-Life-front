import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'
import { FormLogin } from '@molecules/forms/form-login'
import React from 'react'

export default function SectionLogin() {
  return (
    <ContainerPrimary addClass='mx-auto' model={EmodelContainer.m}>
      <FormLogin />
    </ContainerPrimary>
  )
}
