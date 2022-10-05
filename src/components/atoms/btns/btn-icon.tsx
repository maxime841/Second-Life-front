import React from 'react'
import { TBtn } from '@types-app/btn.type'

/**
 * Btn Icon
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @param addClass? string | undefined;
 * @param click? (() => void) | undefined;
 * @param submit? boolean | undefined;
 * @param textColor? string | undefined;
 * @returns
 */

export function BtnIcon ({
  children,
  addClass,
  click,
  submit,
  textColor,
  padding,
  hoverBg,
}: TBtn) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={click}
      className={`
      ${textColor ?? 'hover:text-action'}
      ${addClass}
      ${padding ?? 'p-2'}
      ${hoverBg ?? 'hover:bg-action-bg-hover '}
      flex items-center justify-center
      rounded-full
      hover:bg-action-bg-hover
      dark:hover:bg-action-bg-dark-hover
      h-fit
      w-fit
      `}>
      {children}
    </button>
  )
}
