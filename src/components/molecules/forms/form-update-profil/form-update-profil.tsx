import { Btn } from '@atoms/btns/btn'
import { ErrorText } from '@atoms/errors/error-text'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import { Iuser } from '@types-app/models/user.model'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormUpdateProfil(profil: Iuser) {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [newName, setNewName] = useState('')
  const [email, setEmail] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const { error } = Store.user.useUpdateProfil()

    const handlerOnSubUpdateProfil = async (e: React.FormEvent) => {
      e.preventDefault()
      Store.user.updateProfil(profil)
      const res = await Store.user.updateProfil({
        name: name!,
        newName: newName!,
        email: email!,
        newEmail: newEmail!,
      })
      if (res) {
        navigate('/login')
      }
    }

  return (
    <form onSubmit={handlerOnSubUpdateProfil}>
      <LabelPrimary>Pseudo: </LabelPrimary>
      {/* input name */}
      <InputFull
        placeholder='Renseigner votre pseudo'
        value={name}
        setValueInput={setName}
        activeReset
        required
      />
      <LabelPrimary>Nouveau Pseudo : </LabelPrimary>
      {/* input newName */}
      <InputFull
        placeholder='Renseigner votre nouveau pseudo'
        value={newName}
        setValueInput={setNewName}
        activeReset
        required
      />
      <LabelPrimary>Email: </LabelPrimary>
      {/* input email */}
      <InputFull
        placeholder='Renseigner votre email'
        value={email}
        setValueInput={setEmail}
        type='email'
        activeReset
        required
      />
      <LabelPrimary>Nouveau Email: </LabelPrimary>
      {/* input name */}
      <InputFull
        placeholder='Renseigner votre nouveau email'
        value={newEmail}
        setValueInput={setNewEmail}
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
