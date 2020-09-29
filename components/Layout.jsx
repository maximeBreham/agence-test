import { MDBContainer } from 'mdbreact'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, footer }) => {
  return (
    <>
      <Header />
      {children}
      {footer ? <Footer /> : false}
    </>
  )
}

export default Layout
