import React from 'react';

interface AccessibleButtonProps {
  label: string;
  onClick: () => void;
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({ label, onClick }) => (
  <button aria-label={label} onClick={onClick}>
    {label}
  </button>
);

export default AccessibleButton;
