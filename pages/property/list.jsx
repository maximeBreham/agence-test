import React from 'react'
import { MDBDataTableV5, MDBView, MDBIcon } from 'mdbreact'

import { AdminRoute } from '../../auth/adminRoute'
import { Layout } from '../../components/Layout'
import api from '../../auth/axios'
import useSWR from 'swr'
import Moment from 'react-moment'
import { priceFormatted } from '../../components/Helpers'

const fetcher = url => api.get(url).then(res => res.data)

const PropertyList = () => {
  const { data } = useSWR('/api/properties?limit=50', fetcher)
  const properties = data && data.data

  const dataTable = {
    columns: [
      {
        label: 'Titre',
        field: 'title',
        sorting: 'asc'
      },
      {
        label: 'Description',
        field: 'description',
        sorting: 'asc'
      }
    ],
    rows:
      properties &&
      properties.map(property => {
        return {
          title: property.title,
          description: property.description.slice(0, 200)
        }
      })
  }

  return (
    <MDBDataTableV5
      hover
      entries={5}
      pagesAmount={4}
      data={dataTable}
      paginationLabel={['Précédant', 'Suivant']}
      searchLabel='Rechercher'
      searchTop
      searchBottom={false}
      paginationTop
      paginationBottom={false}
    />
  )
}

export default AdminRoute(PropertyList)
