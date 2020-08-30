import React from 'react';
import { Music } from '../components';
const starwars = require("../assets/starwars.mp3");

const Letter = () => {
  return (
    <div>
      <Music url={starwars} auto={true}/>
      Letter
    </div>
  )
}

export default Letter;
