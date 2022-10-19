import { Btn } from '@atoms/btns/btn'
import { ErrorText } from '@atoms/errors/error-text'
import { InputFull } from '@atoms/inputs/input-full'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function FormUpdatePassword() {
  const { error, loadingResetPassword } = Store.user.useResetPassword()
  const navigate = useNavigate()
  const userCurrent = Store.user.useUserCurrent()
  const [password, setPassword] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [valuePasswordConfirme, setValuePasswordConfirme] = useState('')

  useEffect(() => {
    setPassword(userCurrent.password!)
    setValuePassword(userCurrent.valuePassword!)
    setValuePasswordConfirme(userCurrent.valuePasswordConfirme!)
  }, [userCurrent])

  const handlerResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    Store.user.activateResetPasswordLoadding()
    const res = await Store.user.updatePasswordProfil({
      password,
      valuePassword,
      valuePasswordConfirme,
    })
    if (res) {
      navigate('/user/profil')
    }
    Store.user.disabledResetPasswordLoadding()
  }

  return (
    <form onSubmit={handlerResetPassword}>
       {/* input password current */}
       <InputFull
        placeholder='Mot de passe'
        value={password ?? ''}
        setValueInput={setPassword}
        addClass='mb-3'
        type='password'
        eye
        required
      />

      {/* input password */}
      <InputFull
        placeholder='Nouveau mot de passe'
        value={valuePassword ?? ''}
        setValueInput={setValuePassword}
        addClass='mb-3'
        type='password'
        eye
        required
      />

      {/* input password_confirmation */}
      <InputFull
        placeholder='Confirmer le nouveau mot de passe'
        value={valuePasswordConfirme ?? ''}
        setValueInput={setValuePasswordConfirme}
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
