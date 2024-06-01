import { twMerge } from "tailwind-merge";

interface CounterProps {
  title: string;
  textClasses: string;
  counter: string;
}

export function Counter({ title, textClasses, counter }: CounterProps) {
  return (
    <div>
      <span className={twMerge('font-bold text-sm', textClasses)}>{title}</span>
      <span className="ml-2 text-gray-200 font-bold bg-gray-400 px-2 rounded-2xl text-xs">
        {counter}
      </span>
    </div>
  );
}
