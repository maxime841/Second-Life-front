import Title from '@atoms/title/title'
import SectionLogin from '@organisms/section-login/section-login'
import React from 'react'

function LoginPage() {
  return (
    <div>
      <Title addClass='mb-8 font-bold text-3xl'>Connexion</Title>
      <SectionLogin />
    </div>
  )
}

export default LoginPage
