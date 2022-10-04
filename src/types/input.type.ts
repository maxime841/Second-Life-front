/**
 * type for input sample
 */
export type TInput = {
  children?: JSX.Element | JSX.Element[] | string | string[]
  id?: string
  name?: string
  type?: string
  value: string
  disabled?: boolean
  placeholder: string
  required?: boolean
  setValueInput: any
  classDefault?: string
  addClass?: string
  colors?: string
  border?: string
  radius?: string
  padding?: string
  textSize?: string
}

/**
 * type for input full
 */
export type TInputFull = TInput & {
  activeReset?: boolean
  eye?: boolean
  icon?: JSX.Element | JSX.Element[]
}
