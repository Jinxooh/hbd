import React from 'react';
import { Music, Starwars } from '../components';
const starwars = require("../assets/starwars.mp3");

const Letter = () => {
  return (
    <div>
      <Starwars />
      <Music url={starwars} auto={true}/>
    </div>
  )
}

export default Letter;
