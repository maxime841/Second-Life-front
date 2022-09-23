import { useEffect, useState } from 'react'
import { TokenStore } from './token.store'

export const TokenHook = {
  /**
    * hook for watch token
    * @returns token
    */
  useToken: () => {
    const [token, setToken] = useState('')

    useEffect(() => {
      TokenStore.token$.subscribe(value => setToken(value))
    }, [])

    return token
  }
}
