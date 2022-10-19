import { Btn } from '@atoms/btns/btn'
import { ErrorText } from '@atoms/errors/error-text'
import { InputFull } from '@atoms/inputs/input-full'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FormUpdatePassword(passwords: {}) {
  const { error } = Store.user.useUpdatePasswordProfil(passwords)
  const navigate = useNavigate()
  const userCurrent = Store.user.useUserCurrent()
  const [updatePassword, setUpdatePassword] = useState({
    currentPassword: '',
    password: '',
    passwordConfirme: ''
  })

  useEffect(() => {
    setUpdatePassword({ ...updatePassword })
  }, [userCurrent])

  const handlerUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    Store.user.activateResetPasswordLoadding()
    const res = await Store.user.updatePasswordProfil(passwords)
    if (res) {
      navigate('/user/profil')
    }
    Store.user.disabledResetPasswordLoadding()
  }

  return (
    <form onSubmit={handlerUpdatePassword}>
       {/* input password current */}
       <InputFull
        placeholder='Mot de passe'
        value={updatePassword.currentPassword ?? ''}
        setValueInput={setUpdatePassword}
        addClass='mb-3'
        type='password'
        eye
        required
      />

      {/* input password */}
      <InputFull
        placeholder='Nouveau mot de passe'
        value={updatePassword.password ?? ''}
        setValueInput={setUpdatePassword}
        addClass='mb-3'
        type='password'
        eye
        required
      />

      {/* input password_confirmation */}
      <InputFull
        placeholder='Confirmer le nouveau mot de passe'
        value={updatePassword.passwordConfirme ?? ''}
        setValueInput={setUpdatePassword}
        addClass='mb-3'
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
