import React, { useState } from 'react'
import { MDBCol, MDBContainer, MDBIcon } from 'mdbreact'
import api from '../auth/axios'
import { useRouter } from 'next/router'
import useSWR from 'swr'

export const SearchFilter = () => {
  const router = useRouter()
  const [values, setValues] = useState({
    title: '',
    category: ''
  })

  const fetcher = url => api.get(url).then(response => response.data)

  const { data } = useSWR('/api/categories', fetcher)

  const CategoryList = ({ options }) => {
    return (
      options &&
      options.map(option => (
        <option name={option._id} value={option._id} key={option._id}>
          {option.name}
        </option>
      ))
    )
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    router.push(
      `/search?${values.title && `title=${values.title}`}${values.category &&
        `&category=${values.category}`}`
    )
  }
  return (
    <MDBContainer>
      <form className='w-75 mx-auto' onSubmit={handleSubmit}>
        <div className='form-row align-items-center mt-4'>
          <div className='col-5'>
            <div className='input-group mb-2'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <MDBIcon icon='list-ul' />
                </div>
              </div>
              <select
                name='category'
                onChange={handleChange('category')}
                value={values.category}
                className='form-control form-field'
              >
                <option defaultChecked>Catégories</option>
                {data && <CategoryList options={data} />}
              </select>
            </div>
          </div>
          <div className='col-7'>
            <div className='input-group mb-2'>
              <input
                onChange={handleChange('title')}
                className='form-control form-field'
                type='text'
                name='title'
                placeholder='Recherche'
              />
              <div className='input-group-append'>
                <div className='input-group-text'>
                  <MDBIcon icon='search' onClick={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </MDBContainer>
  )
}
