import React from "react";
import Webcam, { WebcamProps } from "react-webcam";

const WebCam = () =>
  <Webcam 
    audio={true}
    forceScreenshotSourceSize={true}
    imageSmoothing={true}
    mirrored={true}
    screenshotFormat={'image/png'}
    screenshotQuality={10}
    minScreenshotHeight={720}
    minScreenshotWidth={720}
    onUserMedia={() => { console.log('hey')}}
    onUserMediaError={(error) => { console.log('error', error)}}
  />;

export default WebCam;