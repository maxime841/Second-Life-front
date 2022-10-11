import React from 'react'
import { TtitleStat } from './title-stat.type'

export function TitleState({ children, addClass }: TtitleStat) {
  return <h3 className={`text-3xl mb-4 md:mb-8 ${addClass}`}>{children}</h3>
}
