import React from "react";
import styled from 'styled-components';
import { Music, Image } from '../components';
import { main } from '../assets';

const happysong = require("../assets/happysong.mp3");

const HomeContainer = styled.div`
  text-align: center;
`;

const Home = () => {
  return <HomeContainer>
      <Music url={happysong} auto={true}/>
      <Image src={main} />
    </HomeContainer>;
};
export default Home;