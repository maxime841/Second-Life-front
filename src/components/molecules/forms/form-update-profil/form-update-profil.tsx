import { Btn } from '@atoms/btns/btn'
import { ErrorText } from '@atoms/errors/error-text'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormUpdateProfil() {
  const navigate = useNavigate()
  const userCurrent = Store.user.useUserCurrent()
  const { error } = Store.user.useUpdateProfil()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    setName(userCurrent.name!)
    setEmail(userCurrent.email!)
  }, [userCurrent])

  const handlerOnSubUpdateProfil = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await Store.user.updateProfil({
      name,
      email,
    })
    if (res) {
      navigate('/user/profil')
    }
  }

  return (
    <form onSubmit={handlerOnSubUpdateProfil}>
      {/* input name */}
      <LabelPrimary>Pseudo: </LabelPrimary>
      <InputFull
        placeholder='Renseigner votre pseudo'
        value={name ?? ''}
        setValueInput={setName}
        type='text'
        activeReset
        required
      />

      {/* input email */}
      <LabelPrimary>Email: </LabelPrimary>
      <InputFull
        placeholder='Renseigner votre email'
        value={email ?? ''}
        setValueInput={setEmail}
        type='email'
        activeReset
        required
      />

      {/* error text */}
      <ErrorText position='text-center sm:text-left'>{error}</ErrorText>

      {/* btn form */}
      <div className='flex justify-end mt-4'>
        {/* btn form */}
        <div className='flex justify-end mt-4'>
          <Btn submit>Modifier</Btn>
        </div>
      </div>
    </form>
  )
}
