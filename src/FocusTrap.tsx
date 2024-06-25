import React, { useRef, useEffect } from 'react';

interface FocusTrapProps {
  children: React.ReactNode;
}

const FocusTrap: React.FC<FocusTrapProps> = ({ children }) => {
  const trapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const focusableElements = trapRef.current?.querySelectorAll(
      'a, button, textarea, input, select'
    );
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    firstElement?.focus();
    document.addEventListener('keydown', handleTab);

    return () => {
      document.removeEventListener('keydown', handleTab);
    };
  }, []);

  return <div ref={trapRef}>{children}</div>;
};

export default FocusTrap;
