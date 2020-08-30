import React from "react";
import { Music } from '../components';
const happysong = require("../assets/happysong.mp3");

const Home = () => {
  return <div>
    <Music url={happysong} auto={true}/>
    This is Home page
    </div>;
};
export default Home;