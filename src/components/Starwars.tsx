import React, { useRef, useState, useLayoutEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Canvas from './Canvas';
import { close, full } from '../assets';

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

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
  font-size: 150%;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 280%;
  perspective: 400px;
  text-align: justify;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    font-size: 250%;
    font-weight: 600;
    letter-spacing: 1px;
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    font-size: 250%;
    font-weight: 600;
    letter-spacing: 3px;
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    font-size: 300%;
    font-weight: 600;
    letter-spacing: 5px;
  }
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
  animation: ${CrawlKeyFrames} 80s linear infinite;

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
              <p>Happy Birthday🍰</p>
              <h1>Dear my Angel Hyejung👼🏻</h1>
            </div>

            <p>혜정아 안녕? 29번째 생일🎂 진심으로 축하해🥳 Oh Happy 햅삐 Day~!음~~ 혜정이한테 해줄수 있는게 뭔지 잘 생각해보고 내가 잘 할 수 있는걸로 만들어보았어! 히히 어때 감동이야?!</p>
            <p>편지는 스타워즈 컨셉으로 잡아보았어?😄ㅋㅋ 너무 내 취향인가? ㅋㅋ 웅장하게 내 마음을 표현해 보았소💕 넘 쑥스럽당 키키</p>
            <p>내 마음을 받아줘~❤️</p>
            <p>불과 얼마전만 해도 아프지 않고 멀쩡히 돌아다녔는데 혜정이 다치고 나니까 모든 생각이 바뀌어 버린거 같아. 조금만 내가 더 신경썻으면 달라졌을까 싶기도 하고 아쉬운게 많더라고…</p>
            <p>또 내가 너무 혜정이한테 욕심만 내는건 아닌지 내마음 다 헤아려주길 바라기만 한건 아닌지… 생각해보니까 그런 맘 다 몰라줘도 되구 그냥 이제 난 우리가 건강하고 행복하기만 하면 돼! 진심이야!</p>
            <p>이런 아쉬운 마음들은 이미 벌어진 일이니까 그 아쉬운 마음은 잊고 다 나을 때까지 같이 화이팅 하자!! 빨리 나아야지 우리 혜정이랑 바다도 놀러 다니고 해외여행도 가고 신혼여행두 가지~!</p>
            <p>아무튼 슬픈 얘기는 여기까지만 하구! 벌~써~ 3번째 맞이하는 생일이야! 정말 정말 축하해 그리고 내 옆에 3년동안 같이 있어줘서 고마워! 이렇게 늘 곁에서 함께 했으면 좋겠다</p>
            <p>앞으로 남은 날들 서로 의지하고 아껴주며 더 잘 지내도록 하자 헤헤</p>
            <p>이거 만들면서 옛날사진들을 보거나 아이디어 생각할 때 마다 너무 혜정이가 귀여웠고 또 날 생각하는 마음이 느껴지는게 너무 이쁘고 감사했어! 늘 변함없이 마음줘서 고마워💛</p>
            <p>사랑해❤️</p>
            <p>앞으로 눈이 오나 비가 오나 항상 검은머리 파뿌리 될 때까지 사랑하자! 뀨</p>
            <p>As good as it gets!~ 이보다 난 더 좋을수 없는거 같아 이쁜아~ 히히 사랑하고~ 서로 챙겨주고 안아주는 이쁜 사랑 평생하쟝~~</p>
            <p>쀼쀼💏</p>
            <p>2020.09.15</p>
            <p>너의 에인절H👼🏻</p>
          </Crawl>

        </Section>
      </StarwarsContainer>
    </>
  )
}

export default Starwars;