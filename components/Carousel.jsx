import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'next/image';

const Carousel = () => {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={60}
        naturalSlideHeight={50}
        totalSlides={1}
      >
        <Slider>
          <Slide index={0}>
            <div className='grid place-items-center'>
              <Image
                height={500}
                width={800}
                src="https://theglu.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fe6fi137e%2Fthebetter%2F0ddbe6c0b9a661a4736d98bba81e20850b16bf45-6001x4001.jpg&w=3840&q=75" alt="ddss"></Image>
            </div>
          </Slide>
          {/* <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide> */}
        </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default Carousel