import Title from '@atoms/title/title'
import SectionForgotPassword from '@organisms/section-forgot-password/section-forgot-password'
import React from 'react'

export function ForgotPasswordPage() {
  return (
    <section>
      <Title addClass='text-2xl md:text-3xl mb-8'>
        Réinitialiser votre mot de passe
      </Title>
      <SectionForgotPassword />
    </section>
  )
}
