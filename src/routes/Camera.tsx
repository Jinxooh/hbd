import React, { useRef, useState, useLayoutEffect } from 'react';
import { WebCam } from '../components';
import styled from 'styled-components';

const CameraContainer = styled.div`
  text-align: center;
`;

const Camera = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      if (divRef.current) {
        const { clientWidth, clientHeight } = divRef.current;
        setSize([clientWidth, clientHeight])
      }
      return size;
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const [ width, height ] = size;

  return (
    <CameraContainer ref={divRef}>
      <WebCam width={width} height={height} />
    </CameraContainer>
  )
}

export default Camera;
