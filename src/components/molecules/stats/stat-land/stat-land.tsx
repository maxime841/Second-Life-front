import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import { Store } from '@store/store'
import { Progress } from '@mantine/core'
import React from 'react'

export function StatLand() {
  const countLand = Store.land.useCountLand()
  const { high, low, mean, highTime, lowTime, meanTime } =
    Store.house.useHouseAverageRentalPrice()

  return (
    <ContainerPrimary model={EmodelContainer.m}>
      {/* title */}
      <TitleState>Statistiques des terrains</TitleState>

      {/* nombre de land */}
      <LabelPrimary value={`${countLand}`}>Nombre de land : </LabelPrimary>

      {/* moyenne des prix de location */}
      <LabelPrimary>Prix des locations :</LabelPrimary>
      {/* stat */}
      <div className='mb-6'>
        <Progress
          color={Math.round((100 * mean) / high) < 50 ? 'green' : 'red'}
          value={Math.round((100 * mean) / high)}
          label={`PL ${Math.round(mean)} $`}
          size={24}
          radius='xl'
        />
        <div className='flex justify-between items-center font-bold text-xs'>
          <div>{low} $</div>
          <div>{high} $</div>
        </div>
      </div>

      {/* moyenne du temps de location */}
      <LabelPrimary>Temps de location : </LabelPrimary>
      <div className='mb-6'>
        <Progress
          color={Math.round((100 * meanTime) / highTime) < 50 ? 'green' : 'red'}
          value={Math.round((100 * meanTime) / highTime)}
          label={`TL ${Math.round(meanTime)} J`}
          size={24}
          radius='xl'
        />
        <div className='flex justify-between items-center font-bold text-xs'>
          <div>{Math.floor(lowTime)} J</div>
          <div>{Math.floor(highTime)} J</div>
        </div>
      </div>
    </ContainerPrimary>
  )
}
