import { Btn } from '@atoms/btns/btn'
import { ErrorText } from '@atoms/errors/error-text'
import { LockIcon } from '@atoms/icons/lock-icon'
import { UserIcon } from '@atoms/icons/user-icon'
import LinkText from '@atoms/links/link-text'
import InputFull from '@molecules/inputs/input-full'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormLogin() {
  // state for input
  const [valueEmail, setValueEmail] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  // hook
  const error = Store.user.useLoginError()
  const loginLoader = Store.user.useLoginLoader()
  const navigate = useNavigate()

  /**
   * connexion user
   * @param e React.FormEvent
   */
  const handlerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.user.login(valueEmail, valuePassword)
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handlerSubmit}>
      {/* input email */}
      <InputFull
        placeholder='Votre identifiant'
        value={valueEmail}
        setValueInput={setValueEmail}
        type='email'
        icon={<UserIcon />}
        addClass='mb-4'
        activeReset
        required
      />

      {/* input password */}
      <InputFull
        placeholder='Mot de passe'
        value={valuePassword}
        setValueInput={setValuePassword}
        type='password'
        icon={<LockIcon />}
        eye
        required
      />

      {/* link forgot password */}
      <LinkText link='/forgot-password'>Mot de passe oublié ?</LinkText>

      {/* error text */}
      <ErrorText position='text-center sm:text-left'>{error}</ErrorText>

      {/* btn form */}
      <div className='flex justify-end mt-4'>
        <Btn submit>Se connecter</Btn>
      </div>
    </form>
  )
}
