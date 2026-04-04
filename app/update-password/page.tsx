'use client'
import RecoverPasswordForm from '@/components/auth/auth/RecoverPasswordForm'
import UpdatePasswordForm from '@/components/auth/auth/UpdatePasswordForm'
import React from 'react'

function UpdatePasswordScreen() {
  return (
    < div className='w-full h-screen flex items-center justify-center'>
      <UpdatePasswordForm />
    </div>
  )
}

export default UpdatePasswordScreen