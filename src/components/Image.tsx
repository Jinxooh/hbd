import React from 'react';
import styled from 'styled-components';

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const ImageContainer = styled.img`
  width: 90%;
  padding: 1rem;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: 25%;
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: 35%;
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: 40%;
  }

`;

type ImageProps = {
  src: string;
}

const Image = ({ src }: ImageProps) => <ImageContainer src={src} />

export default Image;