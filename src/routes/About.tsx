import React from "react";
import { CountDown } from '../components';
import { CountContext } from '../context';
import styeld from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from '../assets';

const CountDownContainer = styeld.div`
  margin-bottom: 1rem;
`

const CarouselContainer = styeld.div`
  margin: 0 10%;
`
const About = () => {
  return (
    <>
      <CountContext.Consumer>
        {count =>
        <CountDownContainer>
          <CountDown count={count} />
        </CountDownContainer>}
      </CountContext.Consumer>
      <CarouselContainer>
        <Carousel>
          <div>
            <img src={img8} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
          <div>
            <img src={img5} />
          </div>
          <div>
            <img src={img6} />
          </div>
          <div>
            <img src={img7} />
          </div>
        </Carousel>
      </CarouselContainer>
    </>
  )
};
export default About;