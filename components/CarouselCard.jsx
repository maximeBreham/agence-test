import React, { useEffect, useState } from 'react'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView
} from 'mdbreact'

const CarouselCard = ({ property }) => {
  const [images, setImages] = useState([])
  useEffect(() => {
    setImages(property.pictures)
  }, [property])

  return (
    <div className='w-100'>
      <MDBCarousel
        activeItem={1}
        length={images.length}
        showControls={true}
        showIndicators={false}
        className='z-depth-1'
        slide
      >
        <MDBCarouselInner>
          {images &&
            images.map((img, index) => (
              <MDBCarouselItem key={index + 1} itemId={index + 1}>
                <MDBView>
                  <img
                    className='d-block w-100 carousel-img'
                    src={img}
                    alt='First slide'
                  />
                </MDBView>
              </MDBCarouselItem>
            ))}
        </MDBCarouselInner>
      </MDBCarousel>
      <style jsx>
        {`
          @media (min-width: 768px) {
            .carousel-img {
              height: 500px;
            }
          }

          @media (max-width: 768px) {
            .carousel-img {
              height: 300px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default CarouselCard
