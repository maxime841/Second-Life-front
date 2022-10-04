import { TComponentParent } from './component-parent.type'

/**
 * type for all Title
 */
export type TTitle = TComponentParent & {
  textAlign?: string
  fontFamily?: string
  addClass?: string
}
