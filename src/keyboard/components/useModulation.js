import 'src/keyboard/components/Keyboard.css';

import React from 'react';

export const useModulation = () => {
  const [isSharpening, setIsSharpening] = React.useState(false);
  const [isFlattening, setIsFlattening] = React.useState(false);

  return {
    isSharpening,
    setIsSharpening,
    isFlattening,
    setIsFlattening
  };
};
