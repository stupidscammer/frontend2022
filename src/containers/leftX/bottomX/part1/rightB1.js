import React from 'react';
import { Dishes } from '../../../../components/dishes';
export function RightB1() {  
    let sLists=["Olive oil","Oregano","tomato","olives"];
    let showdetails1={
        image:"img/pudding1.png",
        title:"Mohammad",
        detail:sLists
    };
    let showdetails2={
        image:"img/pudding1.png",
        title:"Mohammad",
        detail:sLists
    };
    return (
        <div  className='w-3/4 space-x-10  mt-10 flex flex-col'>
            <p className="mt-5 pl-10 text-7xl font-bold text-white decoration-8 decoration-dashed decoration-white">Recommended Dishes</p>
            <Dishes showData={showdetails1}/>
            <Dishes showData={showdetails2}/>
        </div>    
    );
}


