import React, { useState , useEffect } from 'react';

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
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [])

  return [playing, toggle] as const;
}

type Url = {
  url: string;
  auto?: boolean;
}

const Music = ({url, auto = false}: Url) => {
  const [playing, toggle] = useAudio(url, auto);

  return (
    <div>
      <button onClick={toggle}>{playing ? 'Pause':'Play'}</button>
    </div>
  )
}

export default Music;