import { useEffect, useState } from 'react';
import { MemeObject } from './types';

function useGetMemes() {
  const [memes, setMemes] = useState<Array<MemeObject>>([]);
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(async (res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  return { memes };
}

export { useGetMemes };
