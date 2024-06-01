import { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon: ReactNode;
}

export function IconButton({ title, icon, ...props }: IconButtonProps) {
  return (
    <>
      <button
        className="h-[52px] w-[90px] bg-blue-dark text-gray-100 font-bold rounded-lg hover:bg-blue"
        {...props}
      >
        <span className="flex gap-x-1 justify-center text-sm">
          {title} {icon}
        </span>
      </button>
    </>
  );
}
