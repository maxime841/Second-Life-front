import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import { Store } from '@store/store'
import React from 'react'

export function StatClub() {
  const { nbrDancer, nbrDj, nbrParti } = Store.club.useNbrPartieOfAllClub()

  return (
    <ContainerPrimary model={EmodelContainer.m}>
      {/* title */}
      <TitleState>Statistiques club</TitleState>

      {/* nombre de partie */}
      <LabelPrimary value={`${nbrParti}`}>Nombre de Parties : </LabelPrimary>

      {/* nombre de dj */}
      <LabelPrimary value={`${nbrDj}`}>Nombre de Djs : </LabelPrimary>

      {/* nombre de dancer */}
      <LabelPrimary value={`${nbrDancer}`}>Nombre de Dancer : </LabelPrimary>
    </ContainerPrimary>
  )
}
