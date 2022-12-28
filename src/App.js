import React from 'react';
import { RightX } from './containers/rightX/rightX.js';
import { LeftX } from './containers/leftX/leftX.js';
import './App.css';

function App() {
  return (
    <div className='w-full flex flex-row space-x-10'>
      <div className='w-4/5'>
        <LeftX/>
      </div>
      <div className='w-1/5'>
        <RightX/>
      </div>
    </div>
  );
}

export default App;
