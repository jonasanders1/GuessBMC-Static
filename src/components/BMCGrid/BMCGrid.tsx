import { ReactNode } from 'react';
import './BMCGrid.css';

interface BMCGridProps {
  children: ReactNode;
  className?: string;
}

const BMCGrid = ({ children, className = '' }: BMCGridProps) => {
  return (
    <div className={`bmc-grid ${className}`}>
      {children}
    </div>
  );
};

export default BMCGrid; 