import React from 'react';

import { Keyboard } from 'src/keyboard/components/Keyboard';
import { ChordTitle } from 'src/keyboard/components/ChordTitle';

function App() {
  return (
    <div className="App">
      <ChordTitle />
      <Keyboard />
    </div>
  );
}

export default App;
