import { FormEvent, useEffect, useState } from 'react';
import { MemeObject } from './types/MemeObject';
import './index.css';

export function MemeGenerator() {
  const [memes, setMemes] = useState<Array<MemeObject>>([]);

  const [randomMeme, setRandomMeme] = useState<string>('');
  const [topText, setTopText] = useState<string>('');
  const [bottomText, setBottomText] = useState<string>('');

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(async (res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  const handleGenerate = (e: FormEvent) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * memes.length);
    setRandomMeme(memes[randomIndex].url);
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl" id="title">
        Meme Generator
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10 h-[70vh]">
        <form
          onSubmit={handleGenerate}
          className="border border-gray-200 p-2 rounded-md flex flex-col gap-5 w-full bg-white justify-between"
        >
          <div className="flex flex-col text-left gap-5">
            <label htmlFor="up" className="px-2">
              Top text
            </label>
            <input
              id="top"
              type="text"
              required
              placeholder="Top text"
              className="border px-2 py-1 rounded-md"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-left gap-5">
            <label htmlFor="bottom" className="px-2">
              Bottom text
            </label>
            <input
              id="bottom"
              type="text"
              required
              placeholder="Bottom text"
              className="border px-2 py-1 rounded-md"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
            />
          </div>
          <button className="bg-blue-300 px-3 py-1 rounded-md">Generar</button>
        </form>

        {randomMeme ? (
          <div className="relative w-full">
            <img
              src={randomMeme}
              alt="meme"
              className="object-cover h-[65vh] rounded-md"
            />
            <h2 className="absolute top-0 text-white text-3xl bg-[rgba(0,0,0,0.2)] rounded-md px-5 py-1">
              {topText}
            </h2>
            <h2 className="absolute bottom-0 text-white text-3xl bg-[rgba(0,0,0,0.2)] rounded-md px-5 py-1">
              {bottomText}
            </h2>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
