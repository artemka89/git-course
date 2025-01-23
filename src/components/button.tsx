import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <div className="h-11 py-2 px-4 bg-amber-600 border rounded-xl inline-block cursor-pointer hover:bg-amber-500 transition-colors text-white">
      {children}
    </div>
  );
};
