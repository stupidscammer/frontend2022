import React from 'react';
import { Natrition } from '../../../../components/natrient/natrition';
import { Omition } from '../../../../components/omitShow/omition';
export function LeftB1() {
  let sLists=["Olive oil","Oregano","tomato","olives"];
  let natdetails={
      title:"Include ingredient",
      detail:sLists
  };

  let oLists=["Olive oil","Oregano","tomato","olives"];
  let omitdetails={
      title:"Omit ingredient",
      detail:oLists
  };


  let incLists=["Olive oil","Oregano","tomato","olives"];
  let incdetails={
      title:"Nutrition details",
      detail:incLists
  };
    
  return (
    <div className='mt-10 w-1/4 pl-10'>
      <div className='flex justify-center'>
        <div className='  w-5/6 float-left'>
          <div className="box-border h-auto w-full p-4 border-2 rounded-lg mt-6">
            <Omition showData={incdetails}/>         
          </div>
          <div className="box-border h-auto w-full p-4 border-2 rounded-lg mt-6">
            <Omition showData={omitdetails}/>
          </div>
          <div  className="box-border w-full h-auto  p-4 border-2 rounded-lg mt-6">
            <Natrition showData={natdetails}/>    
          </div>
          <button className='rounded-md w-full h-10 bg-[#F29F05] text-2xl text-white hover:bg-[#FFF369] mt-6'>APPLY</button>
        </div>
        <div className='ml-10 h-fix     border-2 bg-[#A1A1A1] '>
        </div>
      </div>
    </div>   
  );
}
