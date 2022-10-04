import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React from 'react'

export function DashboardPage() {
  return (
    <div>
      DashboardPage
      <LinkBtn click={Store.user.logout} link='/login'>
        Se déconnecter
      </LinkBtn>
    </div>
  )
}
