import React from 'react'
import { TtitlePagePrivate } from './title-page-private.type'
import './title-page-private.css'

export function TitlePagePrivate({ children }: TtitlePagePrivate) {
  return <h1 className='title-page-private'>{children}</h1>
}
