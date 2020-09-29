import React from 'react'
import { MDBCard, MDBCardImage, MDBBadge } from 'mdbreact'
import { priceFormated, priceFormatted } from '../components/Helpers'

const CardVip = ({ propertiesVip }) => {
  return (
    <>
      {propertiesVip &&
        propertiesVip.map(vip => (
          <MDBCard className='mb-3' key={vip._id}>
            <MDBCardImage
              src={vip.pictures[0]}
              zoom
              waves
              hover
              className='d-block w-100 '
            />
            <div className='imgTop'>
              <MDBBadge className='mr-1' color='default'>
                Exclusivité
              </MDBBadge>
              <MDBBadge color='primary'>En vedette</MDBBadge>
            </div>
            <div className='prix'>{priceFormated(vip.price)}</div>
          </MDBCard>
        ))}
      <style jsx>
        {`
          .imgTop {
            position: absolute;
            margin: 5px;
          }

          .prix {
            margin-left: 5px;
            font-weight: blod;
          }
        `}
      </style>
    </>
  )
}

export default CardVip
