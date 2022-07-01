import React from 'react'
import { Main } from '../main'
import { Sidebar } from '../sidebar'
import { Topbar } from '../topBar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Sidebar />
      <div>
        <Topbar />
        <Main>{children}</Main>
      </div>
    </div>
  )
}

export default Layout
