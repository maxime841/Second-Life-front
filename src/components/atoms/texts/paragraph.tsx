import { TText } from '@types-app/text.type'
import React from 'react'

/**
 * Text
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @returns
 */

function Paragraph ({ children }: TText) {
  return (
    <p
      className={`
      text-center
      `}
    >
      {children}
    </p>
  )
}

export default Paragraph
