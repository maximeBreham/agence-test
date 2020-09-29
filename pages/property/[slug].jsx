import React from 'react'
import api from '../../auth/axios'
import CarouselCard from '../../components/CarouselCard'
import Layout from '../../components/Layout'
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdbreact'
import Slug from '../../components/Slug'
import CardVip from '../../components/CardVip'
import CardRelated from '../../components/CardRelated'

const Property = ({ property, propertiesVip, propertiesRelated }) => {
  const style = {
    fontSize: 15
  }

  return (
    <>
      {property && (
        <Layout>
          <MDBContainer>
            <MDBCard>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md='9' lg='9'>
                    <CarouselCard property={property} />
                    <Slug property={property} />
                  </MDBCol>
                  <MDBCol md='3' lg='3'>
                    <h4 className='mt-4'>Contactez-nous</h4>
                    <div style={style}>
                      <MDBIcon icon='calculator' className='mr-2' />
                      17 rue de Paris
                    </div>
                    <div style={style}>
                      <MDBIcon icon='phone-alt' className='mr-2' />
                      +33 1 27 29 74
                    </div>
                    <div style={style}>
                      <MDBIcon icon='mobile-alt' className='mr-2' />
                      +33 6 25 83 25 77
                    </div>
                    <div style={style}>
                      <MDBIcon icon='envelope' className='mr-2' />
                      admin.test@gmail.com
                    </div>
                    <h3 className='mt-4 mb-3'>Bien sponsorisés</h3>
                    <CardVip propertiesVip={propertiesVip} />
                  </MDBCol>
                </MDBRow>
                <hr className='my-4' />
                <MDBRow>
                  {propertiesRelated && propertiesRelated.length !== 0 && (
                    <>
                      <MDBCol>
                        <h2 className='mb-5'>Les biens similaires</h2>
                      </MDBCol>
                      <CardRelated propertiesRelated={propertiesRelated} />
                    </>
                  )}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </Layout>
      )}
    </>
  )
}

export const getStaticPaths = async () => {
  const { data } = await api.get('/api/properties?limit=100')
  const properties = data.data
  const paths = properties.map(property => ({
    params: { slug: property.slug }
  }))

  return {
    paths: paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const { data: property } = await api.get(`/api/property/${slug}`)
  const { data: propertiesVip } = await api.get(`/api/properties/vip`)
  const { data: propertiesRelated } = await api.get(
    `/api/properties/related/${property._id}`
  )

  return {
    props: {
      property,
      propertiesVip,
      propertiesRelated
    }
  }
}

export default Property
