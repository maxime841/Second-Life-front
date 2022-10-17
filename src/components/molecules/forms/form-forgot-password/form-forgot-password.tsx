import { Btn } from '@atoms/btns/btn'
import { ErrorText } from '@atoms/errors/error-text'
import { InputFull } from '@atoms/inputs/input-full'
import { Store } from '@store/store'
import React, { useState } from 'react'

export function FormForgotPassword() {
  const [valueEmail, setValueEmail] = useState('')
  const { error } = Store.user.useForgotPasswordError()

  const handlerSubForgotPassword = async (e: React.FormEvent) => {
    Store.user.activateForgotPasswordLoadding()
    e.preventDefault()
    await Store.user.sendForgotPassword(valueEmail)
    setValueEmail('')
    Store.user.disabledForgotPasswordLoadding()
  }

  return (
    <form onSubmit={handlerSubForgotPassword}>
      {/* input email */}
      <InputFull
        placeholder='Veuillez renseigner une adresse e-mail'
        value={valueEmail}
        setValueInput={setValueEmail}
        type='email'
        activeReset
        required
      />

      {/* error text */}
      <ErrorText position='text-center sm:text-left'>{error}</ErrorText>

      {/* btn form */}
      <div className='flex justify-end mt-4'>
        <Btn submit>Réinitialiser</Btn>
      </div>
    </form>
  )
}
