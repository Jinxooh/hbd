import React from "react";
import Webcam from "react-webcam";

const WebCam = () =>
  <Webcam
    audio={true}
    forceScreenshotSourceSize={true}
    imageSmoothing={true}
    mirrored={true}
    screenshotFormat={'image/png'}
    screenshotQuality={1}
    minScreenshotHeight={720}
    minScreenshotWidth={720}
    onUserMedia={() => { console.log('hey')}}
    onUserMediaError={(error) => { console.log('error', error)}}
  />;

export default WebCam;