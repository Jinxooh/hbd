import React, { useRef, useState, useLayoutEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Canvas from './Canvas';
import { close, full } from '../assets';

const StarwarsContainer = styled.div<{ fullScreen: boolean }>`
  ${props => {
    if (props.fullScreen) {
      return css`
        position: absolute;
        top: 0;
        left: 0;
      `
    }
  }}
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
  user-select: none;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  height: 800px;
  color: #feda4a;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
`
const CrawlKeyFrames = keyframes`
  0% {
    top: 0;
    transform: rotateX(20deg)  translateZ(0);
  }
  100% { 
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
`

const Crawl = styled.div`
  position: relative;
  top: 9999px;
  transform-origin: 50% 100%;
  animation: ${CrawlKeyFrames} 60s linear;

  & title {
    font-size: 90%;
    text-align: center;

    h1 {
      margin: 0 0 100px;
      text-transform: uppercase;
    }
  }
`

const Starwars = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState([0, 0]);
  const [style, setStyle] = useState(true);

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

  const changeStyle = () => setStyle(!style)

  return (
    <>
      <img onClick={changeStyle} src={style ? close: full} style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 9999, width: '30px', height: '30px' }} />
      <StarwarsContainer ref={divRef} fullScreen={style}>
        <Canvas width={width} height={height} />
        <Section>
          <Crawl>
            <div>
              <p><span>🎂</span>Happy Birthday<span>🍰</span></p>
              <h1>to Hyejung</h1>
            </div>

            <p>혜정아 안녕? 29번째 생일 진심으로 축하해 Happy Happy Day~! 음~~ 혜정이한테 해줄수 있는게 뭔지 잘 생각해보고 내가 잘 할 수 있는걸로 만들어보았어! 히히 어때 감동이야?!ㅋㅋ</p>
            <p>편지는 스타워즈 컨셉으로 잡아보았어?😄ㅋㅋ 너무 내 취향인가? ㅋㅋ 웅장하게 내 마음을 표현해 보았소💕 키키</p>
            <p>내 마음을 받아줘~❤️</p>
            <p>불과 얼마전만 해도 아프지 않고 멀쩡히 돌아다녔는데 혜정이 다치고 나니까 모든 생각이 바뀌어 버린거 같아. 조금만 내가 더 신경썻으면 달라졌을까 싶기도 하고 아쉬운게 많더라고…</p>
            <p>그런 아쉬운 마음들은 이미 벌어진 일이니까 그 아쉬운 마음만 가지지말고 그 생각들을 가지고 더 잘해야 할 것 같아. 다 나을 때까지 같이 화이팅 하자!!</p>
            <p>아무튼 슬픈 얘기는 여기까지만 하구!ㅋㅋ 벌써 3번째 맞이하는 생일이야! 이제 앞으로 우리 둘이 지낼 날들이 무수히 많이 남았지만 </p>

          </Crawl>

        </Section>
      </StarwarsContainer>
    </>
  )
}

export default Starwars;