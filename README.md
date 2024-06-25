# react-accessibility-toolkit

A comprehensive library designed to help developers build highly accessible React applications. This toolkit provides a collection of components, hooks, and utilities that ensure your applications comply with the Web Content Accessibility Guidelines (WCAG). It is designed to be easy to integrate into your existing projects, promoting best practices for accessibility and enhancing the user experience for all users, including those with disabilities.

## Features

- **AccessibleButton**: A button component with an accessible label, ensuring screen readers can convey its purpose clearly.
- **FocusTrap**: A component that traps focus within a specified area, useful for modal dialogs and other interactive elements to keep the user's focus contained.
- **useFocusVisible**: A custom hook that helps manage focus visibility, particularly useful for providing visual feedback when elements are focused via keyboard navigation.

## Installation

```bash
npm install react-accessibility-toolkit
```

## Usage
```tsx
import React from 'react';
import { AccessibleButton, FocusTrap, useFocusVisible } from 'react-accessibility-toolkit';

const App = () => {
  const focusVisible = useFocusVisible();

  return (
    <div>
      <AccessibleButton label="Click Me" onClick={() => alert('Clicked!')} />
      <FocusTrap>
        <input type="text" placeholder="Inside focus trap" />
        <button>Another button</button>
      </FocusTrap>
      {focusVisible && <div>Focus is visible</div>}
    </div>
  );
};

export default App;
```

## Components

### AccessibleButton

Renders a button with an accessible label.

### Props:
- label: string - The accessible label for the button.
- onClick: function - The click handler for the button.

### FocusTrap
- Traps focus within a specified area.

### Props:
- children: ReactNode - The content within the focus trap.

### useFocusVisible

A custom hook to determine if the focus is visible.

### Returns:

- focusVisible: boolean - Whether the focus is visible.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.