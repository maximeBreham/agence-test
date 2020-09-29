import React, { useState } from 'react'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from 'mdbreact'

import Link from 'next/link'

import useAuth from '../auth/context'
import { useRouter } from 'next/router'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const router = useRouter()

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MDBNavbar color='unique-color' expand='md' dark>
      <MDBNavbarToggler onClick={handleToggleMenu} />
      <MDBCollapse id='navbarCollapse' navbar isOpen={isOpen}>
        <MDBNavbarNav left>
          <MDBNavItem active={router.pathname === '/'}>
            <Link href='/'>
              <a className='nav-link'>
                <MDBIcon icon='home' className='mr-2' /> home
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem active={router.pathname === '/properties'}>
            <Link href='/properties'>
              <a className='nav-link'>Liste des biens</a>
            </Link>
          </MDBNavItem>
          {isAuthenticated && user.role === 'admin' && (
            <>
              <MDBNavItem active={router.pathname === '/property/list'}>
                <Link href='/property/list'>
                  <a className='nav-link'>Dashboard</a>
                </Link>
              </MDBNavItem>
            </>
          )}
        </MDBNavbarNav>
        <MDBNavbarNav right>
          {!isAuthenticated && (
            <MDBNavItem active={router.pathname === '/login'}>
              <Link href='/login'>
                <a className='nav-link'>
                  <MDBIcon icon='user-alt' className='mr-2' /> Connexion
                </a>
              </Link>
            </MDBNavItem>
          )}

          {isAuthenticated && (
            <>
              <MDBNavItem>
                <div className='nav-link'>
                  <MDBIcon icon='user-alt' className='mr-2' />
                  Bonjour {user.username}
                </div>
              </MDBNavItem>
              <MDBNavItem>
                <a className='nav-link' onClick={logout}>
                  <MDBIcon icon='power-off' className='mr-2' /> Se déconnecter
                </a>
              </MDBNavItem>
            </>
          )}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default Header
