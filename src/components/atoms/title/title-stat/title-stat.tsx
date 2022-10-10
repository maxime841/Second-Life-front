import React from 'react'
import { TtitleStat } from './title-stat.type'

export function TitleState({ children }: TtitleStat) {
  return <h3 className='text-3xl'>{children}</h3>
}
