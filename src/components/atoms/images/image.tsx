import React from 'react'
import { IImage } from '@types-app/image.type'

/**
 * Image
 * @param src? string
 * @param alt? string
 * @param width? number
 * @param height? number
 * @returns
 */
function Image ({ src, alt, size }: IImage) {
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
