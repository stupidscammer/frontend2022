import { RightB2 } from '../bottomX/part2/rightB2';
import { LeftB2 } from '../bottomX/part2/leftB2';

import { RightB1 } from '../bottomX/part1/rightB1';
import { LeftB1 } from '../bottomX/part1/leftB1';
import React from 'react';
export function BottomX() {  
  return (    
    <div className='w-full flex flex-row mt-10 space-x-10'>
      {/* // Part1 */}

      <LeftB1 />      
      <RightB1/>  
      
      {/* // Part2          */}
      
      {/* <LeftB2 />
      <RightB2/>   */}
      
    </div>
  );
}