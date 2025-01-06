import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './BMCElement.css';

interface BMCElementProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: ReactNode;
  className?: string;
}

const BMCElement = ({ 
  title, 
  isExpanded, 
  onToggle, 
  children,
  className = '' 
}: BMCElementProps) => {
  return (
    <div 
      className={`bmc-element ${isExpanded ? 'expanded' : ''} ${className}`}
      onClick={onToggle}
    >
      <div className="bmc-header">
        <h3>{title}</h3>
        <div className="expand-icon">
          <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
        </div>
      </div>
      <div className="bmc-content">
        {children}
      </div>
    </div>
  );
};

export default BMCElement; 