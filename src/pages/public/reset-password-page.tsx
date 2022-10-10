import Title from '@atoms/title/title'
import { SectionResetPassword } from '@organisms/section-reset-password/section-reset-password'
import React from 'react'

export function ResetPasswordPage() {
  return (
    <section>
      <Title addClass='text-2xl md:text-3xl mb-8'>
        Modifier votre mot de passe
      </Title>
      <SectionResetPassword />
    </section>
  )
}
