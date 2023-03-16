import { FC } from 'react';
interface NeoBrutButtonProps {
  children: React.ReactNode;
}

const NeoBrutButton: FC<NeoBrutButtonProps> = ({ children }) => (
  <button className="border border-black border-2 bg-green-200 text-black px-6 rounded-md sm:px-8 sm:py-1 sm:text-lg neoblutshadow">
  <span>{children}</span>
</button>
  );

export default NeoBrutButton;