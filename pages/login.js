import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'
import Layout from '../components/Layout'
import useAuth from '../auth/context'
import { useRouter } from 'next/router'

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    pass: ''
  })

  const router = useRouter()

  const { login, isAuthenticated } = useAuth()

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()

    login(values.username, values.pass)
  }

  return (
    <Layout>
      <MDBContainer>
        <form onSubmit={onSubmit}>
          <p className='h4 text-center my-4'>Connexion</p>
          <div className='grey-text'>
            <MDBInput
              label="Nom d'utilisateur"
              icon='user'
              group
              type='text'
              name='username'
              onChange={handleChange('username')}
            />
            <MDBInput
              label='Mot de passe'
              name='pass'
              icon='lock'
              group
              type='password'
              validate
              onChange={handleChange('pass')}
            />
          </div>
          <div className='text-center'>
            <button type='submit' className='globalButton'>
              Connexion
            </button>
          </div>
        </form>
      </MDBContainer>
    </Layout>
  )
}

export default Login
