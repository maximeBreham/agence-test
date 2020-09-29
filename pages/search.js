import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import api from '../auth/axios'
import { Card } from '../components/Card'
import { SearchFilter } from '../components/SearchFilter'

const Search = () => {
  const router = useRouter()
  const [properties, setProperties] = useState('')

  useEffect(() => {
    async function getProperties () {
      const { data } = await api.post('/api/property/list/search', {
        filters: {
          title: router.query.title,
          category: router.query.category
        }
      })

      setProperties(data.data)
    }

    getProperties()
  }, [router.query.title, router.query.category])

  return (
    <Layout>
      <SearchFilter />
      <div className='my-4 globalColor font-weight-bolder text-center'>
        {`${properties.length} bien(s) trouvé(s)`}
      </div>
      <div>
        {router.query.title || router.query.category ? (
          <Card properties={properties} />
        ) : null}
      </div>
    </Layout>
  )
}

export default Search
