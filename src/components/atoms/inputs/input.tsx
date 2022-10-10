import { TInput } from '@types-app/input.type'
import React from 'react'

/**
 * input
 * @param id?: string,
 * @param name?: string,
 * @param type?: string,
 * @param value: string,
 * @param disabled?: boolean,
 * @param placeholder: string,
 * @param required?: boolean,
 * @param setValueInput: React.Dispatch<React.SetStateAction<string>>,
 * @param classDefault?: string,
 * @param addClass?: string,
 * @param colors?: string,
 * @param border?: string,
 * @param radius?: string,
 * @param padding?: string,
 * @param textSize?: string,
 * @returns
 */
function Input({
  id,
  name,
  value,
  type,
  disabled,
  placeholder,
  required,
  setValueInput,
  classDefault,
  addClass,
  colors,
  border,
  radius,
  padding,
  textSize,
}: TInput) {
  return (
    <input
      id={id}
      name={name}
      value={value}
      type={type ?? 'text'}
      disabled={disabled}
      placeholder={placeholder}
      required={required}
      onChange={e => setValueInput(e.target.value)}
      className={`
          ${classDefault ?? 'block'} 
          ${addClass} 
          ${
            border ??
            `
          outline-none 
          border-2 
          border-transparent 
          focus:border-2 
          focus:border-action
          `
          } 
          ${radius ?? 'rounded-lg'} 
          ${padding ?? 'py-2 pl-4 pr-4'} 
          ${
            colors ??
            `
          bg-fond_claire 
          `
          }
          ${textSize ?? 'text-input-size-text'}
        `}
    />
  )
}

export default Input
