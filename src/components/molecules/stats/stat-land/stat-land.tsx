import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import React from 'react'

export function StatLand() {
  return (
    <ContainerPrimary model={EmodelContainer.m}>
      <TitleState>Coucou</TitleState>
      <div className='my-4'></div>
      <LabelPrimary value='15'>Nombre de land : </LabelPrimary>
      <LabelPrimary value='haimezjohn@gmail.com'>Email : </LabelPrimary>
    </ContainerPrimary>
  )
}
