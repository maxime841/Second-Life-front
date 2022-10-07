import { Btn } from '@atoms/btns/btn'
import { ErrorText } from '@atoms/errors/error-text'
import InputFull from '@molecules/inputs/input-full'
import { Store } from '@store/store'
import React, { useState } from 'react'

export default function FormResetPassword() {
  const { error, loadingResetPassword } = Store.user.useResetPassword()
  const [valueEmail, setValueEmail] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [valuePasswordConfirme, setValuePasswordConfirme] = useState('')

  const handlerResetPassword = async () => {}

  return (
    <form>
      {/* input email */}
      <InputFull
        placeholder='Veuillez renseigner votre adresse e-mail'
        value={valueEmail}
        setValueInput={setValueEmail}
        type='email'
        activeReset
        required
      />

      {/* input password */}
      <InputFull
        placeholder='Nouveau mot de passe'
        value={valuePassword}
        setValueInput={setValuePassword}
        type='password'
        eye
        required
      />

      {/* input password_confirmation */}
      <InputFull
        placeholder='Confirmer le nouveau mot de passe'
        value={valuePasswordConfirme}
        setValueInput={setValuePasswordConfirme}
        type='password'
        eye
        required
      />

      {/* error text */}
      <ErrorText position='text-center sm:text-left'>{error}</ErrorText>

      {/* btn form */}
      <div className='flex justify-end mt-4'>
        <Btn submit>Modifier</Btn>
      </div>
    </form>
  )
}
