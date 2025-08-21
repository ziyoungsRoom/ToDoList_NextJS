interface SearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComponent = ({ value, setValue }: SearchProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <input
      value={value}
      placeholder="할 일을 입력하세요."
      onChange={onChange}
      className="w-full h-[64px] px-[24px] py-[17px] text-[16px] outline-none rounded-full bg-slate-100 border-slate-900 border-[2px] shadow-slate-900 shadow-[2px_2px_0] placeholder:text-slate-500"
    />
  );
};

export default SearchComponent;
