import { Btn } from '@atoms/btns/btn'
import { UserIcon } from '@atoms/icons/user-icon'
import InputFull from '@molecules/inputs/input-full'
import React, { useState } from 'react'

export function FormForgotPassword() {
  const [valueEmail, setValueEmail] = useState('')

  return (
    <form>
      {/* input email */}
      <InputFull
        placeholder='Veuillez renseigner une adresse e-mail'
        value={valueEmail}
        setValueInput={setValueEmail}
        type='email'
        activeReset
        required
      />

      {/* btn form */}
      <div className='flex justify-end mt-4'>
        <Btn submit>Modifier mot de passe</Btn>
      </div>
    </form>
  )
}
