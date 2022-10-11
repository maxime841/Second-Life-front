import { TComponentParent } from './component-parent.type'
import { IClub } from './club.type'
import { ILand } from './land.type'

/**
 * type for btn sample example
 * btntext, btnicon
 */
export type TBtn = TComponentParent & {
  ref?: HTMLDivElement | null
  click?: () => void
  submit?: boolean
  addClass?: string
  textColor?: string
  padding?: string
  hoverBg?: string
  bg?: string
  rounded?: string
  tabIndex?: string
  club?: IClub
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

export type TBtnDropdwon = TComponentParent & {}

export interface TBtnDarkMode {
  addClass?: string
}

export type TBtnMenuBurger = {
  addClass?: string
}

export interface TbtnCardClub {
  club?: IClub
  addClass?: string
}

export interface TbtnCardLand {
  land?: ILand
  addClass?: string
}
