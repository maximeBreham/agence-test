import React, { Fragment, forwardRef } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBContainer
} from 'mdbreact'

import { priceFormated } from '../components/Helpers'
import Link from 'next/link'

export const Card = ({ properties }) => {
  return (
    <>
      <MDBContainer className='border border-0'>
        <MDBCard className='shadow-none'>
          <MDBCardBody>
            {properties &&
              properties.map(property => (
                <Fragment key={property._id}>
                  <MDBRow>
                    <MDBCol lg='5'>
                      <Link
                        href='/property/[slug]'
                        as={`property/${property.slug}`}
                      >
                        <a>
                          <MDBView
                            className='rounded z-depth-2 mb-lg-0 mb-4'
                            hover
                            waves
                          >
                            <img
                              className='rounded mx-auto d-block globalImg w-100'
                              src={property.pictures[0]}
                              alt=''
                            />
                          </MDBView>
                        </a>
                      </Link>
                    </MDBCol>
                    <MDBCol lg='7'>
                      <a href='#!' className='globalColor'>
                        <h6 className='font-weight-bold mb-3'>
                          <MDBIcon
                            fab
                            icon='simplybuilt'
                            className='globalColor mr-2'
                          />
                          {property.category.name}
                        </h6>
                      </a>
                      <h3 className='font-weight-bold mb-3 p-0'>
                        <strong>{property.title}</strong>
                      </h3>
                      <p>{property.description.slice(0, 150)}</p>
                      <p className='globalColor'>
                        <strong>{priceFormated(property.price)}</strong>
                      </p>
                      <p>
                        <MDBIcon icon='map-marker-alt' className='mr-2' />
                        <strong>{property.city}</strong>
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <hr className='my-5' />
                </Fragment>
              ))}
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  )
}
