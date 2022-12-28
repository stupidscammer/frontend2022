import React from 'react';
export function AddIngrement(props) {
    const {showData} = props;
    return (
        <div className="flex flex-row w-full mt-5">
            <input type="text" className="ml-3.5 mr-4 h-12 border-2 w-full rounded text-white border-[#353535] bg-transparent " placeholder={showData.addIn}/>
            <img className="ml-5  w-1/6 h-12 rounded-md" src={showData.image} alt="" />
        </div>
    );
}