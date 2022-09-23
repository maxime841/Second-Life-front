import { TComponentParent } from './component-parent.type'

/**
 * type for all component
 */
export type TText = TComponentParent & {
  textAlign?: string
  fontFamily?: string
}
