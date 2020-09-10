import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import styled from 'styled-components'
import { BigImoji, Rainbow } from ".";

const videoConstraints = {
  width: 720,
  height: 720,
  facingMode: "user"
};

type WebCamProps = {
  width: number;
  height: number;
}

const CameraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  video {
    margin: 0 auto;
  }
`;

const ImageContainer = styled.div`
  a {
    text-decoration: none;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;

const WebCam = ({ width, height}: WebCamProps) => {
  const webcamRef = React.useRef<any>(null);
  const [imageSrc, setImageSrc] = useState();
  const capture = React.useCallback(
    () => {
      setImageSrc(webcamRef.current.getScreenshot())
    },
    [webcamRef]
  );

  const takeAgain = () => setImageSrc(undefined)

  return (
    <>
      { imageSrc ?
      <ImageContainer>
        <img src={imageSrc} style={{ width: '70%', height: '70%' }}/>
        <div>
          <BigImoji onClick={takeAgain}>📸</BigImoji>
          <a href={imageSrc} download>
            <BigImoji onClick={takeAgain}>✅</BigImoji>
          </a>
        </div>
        <Rainbow>
          Happy Birth Day
        </Rainbow>
      </ImageContainer> :
      <CameraContainer>
        <Webcam
          audio={false}
          height={340}
          ref={webcamRef}
          width={340}
          videoConstraints={videoConstraints}
          forceScreenshotSourceSize={true}
          imageSmoothing={true}
          mirrored={true}
          screenshotFormat={'image/png'}
          screenshotQuality={1}
          onUserMedia={() => { console.log('hey')}}
          onUserMediaError={(error) => { console.log('error', error)}}
        />
        <BigImoji onClick={capture}>📷</BigImoji>
      </CameraContainer>}
    </>
  );
};

export default WebCam;