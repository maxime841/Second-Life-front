import { TBtn } from '@types-app/btn.type'
import React from 'react'

/**
 * Btn basic
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @param addClass? string | undefined;
 * @param click? (() => void) | undefined;
 * @param submit? boolean | undefined;
 * @param textColor? string | undefined;
 * @returns
 */
export function Btn({
  children,
  addClass,
  click,
  submit,
  textColor,
  padding,
  hoverBg,
  bg,
  rounded,
}: TBtn) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={click}
      className={`
      ${textColor ?? 'hover:text-action '}
      ${addClass}
      ${padding ?? 'py-2 px-3 lg:py-4 lg:px-5'}
      ${bg ?? 'bg-fond_color_button'}
      ${rounded ?? 'rounded-lg'}
      ${hoverBg ?? 'hover:bg-action-bg-hover'}
      flex items-center justify-center
      text-black
      leading-tight
      w-fit
      h-fit
      `}>
      {children}
    </button>
  )
}
