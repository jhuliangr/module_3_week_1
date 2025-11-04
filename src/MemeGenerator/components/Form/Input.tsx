interface Props {
  id: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

function Input({ setValue, value, placeholder, id }: Props) {
  return (
    <input
      id={id}
      type="text"
      required
      placeholder={placeholder}
      className="border px-2 py-1 rounded-md"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export { Input };
