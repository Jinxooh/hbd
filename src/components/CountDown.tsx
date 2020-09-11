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
  const [show, setShow] = useState<null | JSX.Element>(<></>);
  let viewCount = Math.abs(count);

  const [style, setStyle] = useState({
    padding: '5rem 0' ,
    opacity: 1,
    transition: 'all 1s ease',
  })

  useEffect(() => {
    if (first && count < 2000) {
      setStyle({
        padding: '5rem 0',
        opacity: 0,
        transition: 'all 2s ease',
      })
    }
  }, [count])

  const digital = (time: number) => time < 10 ? `0${time}` : `${time}`;

  const render = (children: string| JSX.Element | false) => {
    return (
    <CountDownContainer>
      <Rainbow>
        {children}
      </Rainbow>
    </CountDownContainer>)
  }

  const onTransitionEnd = () => {
    return setShow(null);
  }

  const renderFirst = () => {
    return (
      show && <CountDownContainer style={style} onTransitionEnd={onTransitionEnd}>
        <Rainbow>
          {`${Math.floor(viewCount / (1000 * 60 * 60 * 24)) > 0 ? Math.floor(viewCount / (1000 * 60 * 60 * 24)) + 'days' : ''} ${
          digital(Math.floor(viewCount % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)))}:${
          digital(Math.floor(viewCount % (1000 * 60 * 60)/(1000 * 60)))}:${
          digital(Math.floor(viewCount % (1000 * 60)/(1000)))} Left`}
        </Rainbow>
      </CountDownContainer>
    )
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