import React from 'react'
import {
  MDBCard,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBRow
} from 'mdbreact'
import { priceFormated } from './Helpers'

const CardRelated = ({ propertiesRelated }) => {
  return (
    <MDBRow>
      {propertiesRelated &&
        propertiesRelated.lenght !== 0 &&
        propertiesRelated.map(property => (
          <MDBCol className='mb-3' md='4' lg='4' key={property._id}>
            <MDBCard>
              <MDBCardHeader>{property.title}</MDBCardHeader>
              <MDBCardImage
                src={property.pictures[0]}
                hover
                waves
                className='globalImg'
              />
              <MDBCardFooter>
                <div className='globalColor'>
                  {priceFormated(property.price)}
                </div>
                <small>{property.city}, Monde</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        ))}
    </MDBRow>
  )
}

export default CardRelated
