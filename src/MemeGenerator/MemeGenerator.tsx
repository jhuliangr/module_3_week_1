import { FormEvent, useState } from 'react';
import { ImageComponent } from './components';
import { Form, Title } from './components';
import { useGetMemes } from './memeFetcher';

export function MemeGenerator() {
  const { memes } = useGetMemes();
  const [randomMeme, setRandomMeme] = useState<string>('');
  const [topText, setTopText] = useState<string>('');
  const [bottomText, setBottomText] = useState<string>('');

  const handleGenerate = (e: FormEvent) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * memes.length);
    setRandomMeme(memes[randomIndex].url);
  };

  return (
    <div className="text-center">
      <Title />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10 h-[70vh]">
        <Form
          handleGenerate={handleGenerate}
          bottomText={bottomText}
          setBottomText={setBottomText}
          setTopText={setTopText}
          topText={topText}
        />

        {randomMeme ? (
          <ImageComponent
            bottomText={bottomText}
            randomMeme={randomMeme}
            topText={topText}
          />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
