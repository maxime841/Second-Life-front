import { AppService } from '@store/app/app.service'
import { useEffect, useRef } from 'react'

export const OutSideClickHook = {
  useOutSideClick: () => {
    const myRef = useRef<any>()

    const handleCLickOutside = (e: { target: any }) => {
      if (myRef.current?.contains(e.target)) {
        AppService.closeStateMenuDropdownLand()
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleCLickOutside)
      return () => document.removeEventListener('click', handleCLickOutside)
    }, [])

    return myRef
  }
}
