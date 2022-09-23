import { TComponentParent } from './component-parent.type'

/**
 * type for all label
 */
export type TLabel = TComponentParent & {
  name?: string
  classDefault?: string
  addClass?: string
  colors?: string
  size?: string
}
