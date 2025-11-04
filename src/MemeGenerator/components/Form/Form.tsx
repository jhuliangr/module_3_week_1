import { FormEvent } from 'react';
import { Input } from './Input';

interface Props {
  handleGenerate: (e: FormEvent) => void;
  setTopText: React.Dispatch<React.SetStateAction<string>>;
  setBottomText: React.Dispatch<React.SetStateAction<string>>;
  topText: string;
  bottomText: string;
}

function Form({
  handleGenerate,
  bottomText,
  setBottomText,
  setTopText,
  topText,
}: Props) {
  return (
    <form
      onSubmit={handleGenerate}
      className="border border-gray-200 p-2 rounded-md flex flex-col gap-5 w-full bg-white justify-between"
    >
      <div className="flex flex-col text-left gap-5">
        <label htmlFor="up" className="px-2">
          Top text
        </label>
        <Input
          id="up"
          setValue={setTopText}
          value={topText}
          placeholder="Top text"
        />
      </div>
      <div className="flex flex-col text-left gap-5">
        <label htmlFor="bottom" className="px-2">
          Bottom text
        </label>
        <Input
          id="bottom"
          setValue={setBottomText}
          value={bottomText}
          placeholder="Bottom text"
        />
      </div>
      <button title='Generate' className="bg-blue-300 px-3 py-1 rounded-md">Generate</button>
    </form>
  );
}

export { Form };
