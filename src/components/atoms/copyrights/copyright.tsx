import { TComponentParent } from '@types-app/component-parent.type'
import React from 'react'

/**
 * Copyright (c)
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @returns
 * */

function Copyright ({ children }: TComponentParent) {
  return (
    <p className='pt-4 pb-2 font-thin text-xs text-center md:text-sm'>{children}</p>
  )
}

export default Copyright
