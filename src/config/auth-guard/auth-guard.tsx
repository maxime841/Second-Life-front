import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

/**
 * guard for route of backoffice
 * @returns
 */
export function AuthGuard () {
  return !localStorage.getItem('nekto')
  // ! request
    ? <Navigate to='/connexion' replace />
    : <Outlet />
}
