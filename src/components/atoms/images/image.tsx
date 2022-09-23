import React from 'react'
import { TImage } from '@types-app/image.type'

/**
 * Image
 * @param src? string
 * @param alt? string
 * @param width? number
 * @param height? number
 * @returns
 */
function Image ({ src, alt, size }: TImage) {
  return (
    <img
      src={src}
      alt={alt}
      className={`
      ${size ?? 'w-24 h24'}
    `}
    />
  )
}

export default Image
