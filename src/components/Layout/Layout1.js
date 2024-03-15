import React from 'react'
import Header1 from '../Layout/Header1'
import Footer1 from './Footer1'

const Layout1 = ({children}) => {
  return (
  <>
    <Header1/>
    <div>
        {children}
    </div>
    <Footer1/>
    </>
  )
}

export default Layout1