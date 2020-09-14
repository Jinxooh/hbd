import React, { useState, useEffect } from 'react';
import Rainbow from './Rainbow';
import styled from 'styled-components';

type CountDownProps = {
  count: number;
  first?: boolean;
}

const CountDownContainer = styled.div`
  text-align: center;
`;

const CountDown = ({ count, first }: CountDownProps) => {
  let viewCount = Math.abs(count);

  const digital = (time: number) => time < 10 ? `0${time}` : `${time}`;

  const render = (children: string| JSX.Element | false) => {
    return (
    <CountDownContainer>
      <Rainbow>
        {children}
      </Rainbow>
    </CountDownContainer>)
  }

  const renderFirst = () => {
    if (count > 0) {
      return (
        <CountDownContainer >
          <Rainbow>
            {`${Math.floor(viewCount / (1000 * 60 * 60 * 24)) > 0 ? Math.floor(viewCount / (1000 * 60 * 60 * 24)) + 'days' : ''} ${
            digital(Math.floor(viewCount % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)))}:${
            digital(Math.floor(viewCount % (1000 * 60 * 60)/(1000 * 60)))}:${
            digital(Math.floor(viewCount % (1000 * 60)/(1000)))} Left`}
          </Rainbow>
        </CountDownContainer>
      )
    } else {
      return (<></>)
    }
  }

  if (first) {
    return renderFirst();
  } else {
    return render(`${Math.floor(viewCount / (1000 * 60 * 60 * 24)) > 0 ? Math.floor(viewCount / (1000 * 60 * 60 * 24)) + 'days' : ''} ${
      digital(Math.floor(viewCount % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)))}:${
      digital(Math.floor(viewCount % (1000 * 60 * 60)/(1000 * 60)))}:${
      digital(Math.floor(viewCount % (1000 * 60)/(1000)))} Passed`);
  }
}

export default CountDown;