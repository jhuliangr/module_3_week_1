interface Props {
  randomMeme: string;
  topText: string;
  bottomText: string;
}
function ImageComponent({ bottomText, randomMeme, topText }: Props) {
  return (
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
  );
}

export { ImageComponent };
