import { TComponentParent } from './component-parent.type'

/**
 * type for btn sample example
 * btntext, btnicon
 */
export type TBtn = TComponentParent & {
  ref?: HTMLDivElement | null
  click?: () => void | boolean
  submit?: boolean
  addClass?: string
  textColor?: string
  padding?: string
  hoverBg?: string
  bg?: string
  rounded?: string
  tabIndex?: string
}

/**
 * type for btn of menu on mobile
 */
export interface TBtnMenuMobile {
  hidden?: string
}

/**
 * type for btn of form
 */
export type TBtnForm = TComponentParent & {
  loading?: boolean
}

export type TBtnDropdwon = TComponentParent & {
}
