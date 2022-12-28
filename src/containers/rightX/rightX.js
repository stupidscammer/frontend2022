
import { IconX } from '../../components/iconX';
import { AddIngrement } from '../../components/addIngrement';
import { SListX } from '../../components/sListX';
import React from 'react';
export function RightX() {
  let user={
    image:"img/user.png",
    name:"Mohammad"
  };
  let favor={
    image:"img/heart.png",
    name:"Favorites"
  };
  let shopList={
    image:"img/basket.png",
    name:"Shopping List"
  };
  let addIns={
    image:"img/plus.png",
    addIn:"Shopping List"
  };
  let sLists=["Olive oil","Oregano","tomato","olives", "Olive oil","Oregano","tomato","olives", ];
  return (    
    <div className='w-full pr-10 mt-5 flex flex-col'>
      <IconX showData={user}/>      
      <IconX showData={favor}/>            
      <figure className="pr-5 mt-5 rounded-2xl h-full flex flex-col   bg-white w-full">        
        <IconX  showData={shopList}/>         
        <AddIngrement showData={addIns}/>        
        <SListX showData={sLists}/>                       
      </figure>
    </div>
  );
}
