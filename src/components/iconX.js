import React from 'react';
export function IconX(props) {
    const {showData} = props;
    return (
        <div className='h-20 mt-5 flex items-stretch'>
            <figure className="rounded-2xl h-full  bg-white w-full flex flex-row">
                <img className="pl-3.5 w-auto h-auto rounded-2xl " src={showData.image} alt="user" />
                <p className="text-justify text-xl pl-7 self-center">{showData.name}</p>
            </figure>
        </div>
    );
}