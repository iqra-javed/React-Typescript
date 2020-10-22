import React from 'react';
import { TextField } from './TextField';

function App() {
  return (
   <div>
     <TextField text="hello" person={{firstName: 'Iqra', lastName: 'Javed'}}/>
   </div>
  );
}

export default App;
