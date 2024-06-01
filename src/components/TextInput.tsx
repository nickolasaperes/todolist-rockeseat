import { InputHTMLAttributes } from "react";

export function TextInput({...props}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="h-14 w-[632px] outline-none bg-gray-500 border-2 border-gray-700 placeholder:text-gray-300 text-gray-100 text-base placeholder:text-base rounded-lg px-4 drop-shadow-xl"
      type="text"
      {...props}
    />
  );
}
