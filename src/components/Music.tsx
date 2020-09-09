import React, { useState , useEffect } from 'react';
import styled from 'styled-components'
import { play, pause } from '../assets';

const useAudio = (url: string, auto: boolean = false) => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(auto)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play(): audio.pause()
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.pause();
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [])

  return [playing, toggle] as const;
}


type Url = {
  url: string;
  auto?: boolean;
}

const MusicContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 10px 20px;
`

const Music = ({url, auto = false}: Url) => {
  const [playing, toggle] = useAudio(url, auto);

  return (
    <MusicContainer>
      <img style={{ width: '30px', height: '30px' }} onClick={toggle} src={playing ? pause : play} />
    </MusicContainer>
  )
}

export default Music;