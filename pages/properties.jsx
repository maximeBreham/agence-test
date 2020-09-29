import React from 'react'
import Layout from '../components/Layout'
import api from '../auth/axios'
import { Card } from '../components/Card'
import { MDBContainer } from 'mdbreact'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'
import { SearchFilter } from '../components/SearchFilter'

const Properties = ({ properties, currentPage, totalPages }) => {
  const router = useRouter()

  const paginationHandler = page => {
    const currentPath = router.pathname
    const currentQuery = { ...router.query }
    currentQuery.page = page.selected + 1
    router
      .push({
        pathname: currentPath,
        query: currentQuery
      })
      .then(window.scrollTo(0, 0))
  }

  return (
    <Layout>
      <MDBContainer>
        <SearchFilter />
        <Card properties={properties} />

        <div className='paginateCenter'>
          <ReactPaginate
            onPageChange={paginationHandler}
            initialPage={currentPage - 1}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            previousLabel='Précédent'
            nextLabel='Suivant'
            activeClassName='activated'
            breakLabel='...'
            pageClassName='paginate num'
            containerClassName='custom-paginate'
            previousClassName='paginate previous'
            nextClassName='paginate next'
          />
        </div>
      </MDBContainer>
    </Layout>
  )
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1
  console.log(page)
  const { data } = await api.get(`/api/properties?page=${page}`)
  const properties = data.data
  const { currentPage, totalPages } = data

  return {
    props: {
      properties,
      currentPage,
      totalPages
    }
  }
}

export default Properties
