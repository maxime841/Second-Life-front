import { TComponentParent } from './component-parent.type'

/**
 * type for all component
 */
export type TLink = TComponentParent & {
  link: string
  click?: () => void
  addClass?: string
  textColor?: string
  padding?: string
  hoverBg?: string
  bg?: string
  rounded?: string
}

/**
 * type for link brand in header
 */
export interface TLinkBrandHeader {
  addClass?: string
}
