import { FormLogin } from '@molecules/forms/form-login'
import React from 'react'

function LoginPage() {
  return (
    <div>
      <div className='mx-auto bg-fond2_claire dark:bg-fond2_dark w-full sm:max-w-md px-4 py-5 sm:px-8 md:px-12 md:py-8'>
        <FormLogin />
      </div>
    </div>
  )
}

export default LoginPage
