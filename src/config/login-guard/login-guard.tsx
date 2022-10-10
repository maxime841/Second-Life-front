import { Store } from '@store/store'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

/**
 * guard for route of backoffice
 * @returns
 */
export function LoginGuard() {
  const token = Store.token.useToken()

  return localStorage.getItem('nekto') ? (
    <Navigate to='/dashboard' replace />
  ) : (
    <Outlet />
  )
}
