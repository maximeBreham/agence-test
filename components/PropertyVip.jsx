import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBView
} from 'mdbreact'
import { priceFormated } from './Helpers'

export const PropertyVip = ({ properties }) => {
  return (
    <>
      <h2 className='h2-responsive font-weight-bold text-center my-4 globalColor'>
        Bien sponsorisés
      </h2>
      <MDBRow>
        {properties &&
          properties.map(property => (
            <MDBCol md='4' lg='4' key={property._id}>
              <MDBView zoom>
                <img
                  src={property.pictures[0]}
                  alt={property.title}
                  className='globalImg'
                />
              </MDBView>
              <MDBCardBody>
                <MDBCardTitle>{property.title}</MDBCardTitle>
                <MDBCardText>
                  <strong>{priceFormated(property.price)}</strong>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          ))}
      </MDBRow>
    </>
  )
}
