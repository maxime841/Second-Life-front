import { TTitle } from '@types-app/title.type'
import React from 'react'

/**
 * Text
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @returns
 */

function Title ({ children }: TTitle) {
  return (
    <h1
      className={`
      text-center
      `}
    >
      {children}
    </h1>
  )
}

export default Title
