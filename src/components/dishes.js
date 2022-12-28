import React from 'react';
export function Dishes(props) {
    const { showData } = props;
    return (
        <div className='w-4/5'>
            <figure className="mt-10 bg-white rounded-2xl h-80 flex flex-row" >
                <img className="w-2/5 h-full rounded-2xl" src={showData.image} alt="dish" />
                <div className='w-3/5 flex flex-row'>
                    <div className='w-full'>
                        <p className="text-4xl mt-6 ml-5">{showData.title}</p>
                        {showData.detail.map((sdata, index) =>
                            <div className='flex flex-row w-full mt-5' key={`show_data_${index}`}>
                                <li className='text-lg text-[#353535] ml-10  w-4/5 '>{sdata}</li>
                            </div>
                        )}
                        <p className='text-lg text-[#353535] m-2.5 ml-2' >  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...  ...</p>
                    </div>
                    <div className='w-1/6 mr-5 mt-5'>
                        <img src='../../../../img/heart.png' className='w-auto h-auto rounded-2xl' alt='heart' />
                    </div>                    
                </div>
            </figure>
        </div>
    );
}