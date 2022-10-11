import React from 'react'
import { TlabelPrimary } from './label-primary.type'
import './label-primary.css'

export function LabelPrimary({
  children,
  value,
  addClassLabel,
  addClassValue,
}: TlabelPrimary) {
  return (
    <label className={`block mb-4 ${addClassLabel}`}>
      {children}
      {value ? (
        <span className={`label-primary-app ${addClassValue}`}>{value}</span>
      ) : null}
    </label>
  )
}
