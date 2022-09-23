import { TBtn } from '@types-app/btn.type'
import React from 'react'

/**
 * Btn Dropdown
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @param addClass? string | undefined;
 * @param click? (() => void) | undefined;
 * @param submit? boolean | undefined;
 * @param textColor? string | undefined;
 * @returns
 */
function BtnDropdown ({
  children,
  addClass,
  click,
  submit,
  textColor,
  padding,
  hoverBg,
  bg,
  rounded
}: TBtn) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={click}
      className={`
      ${textColor}
      ${addClass}
      ${padding ?? 'py-4 px-5 '}
      ${bg ?? 'bg-fond_color_button'}
      ${rounded ?? 'rounded-lg'}
      ${hoverBg ?? 'hover:bg-action-bg-hover'}
      items-center justify-center
      text-black
      dropdown
      dropdown-content  
      rounded-box 
      w-fit
      h-fit
      hidden md:flex
      `}
    >
      {children}
    </button>
  )
}

export default BtnDropdown
