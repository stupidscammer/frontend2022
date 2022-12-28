import React from 'react';
export function Omition(props) {  
    const { showData } = props;
    return (
        <div >
            <p className='text-white text-3xl'>{showData.title}</p>
            <div className='w-full flex flex-row mt-2'>
                <input type="text" className="w-4/5 h-1/5 border-2 rounded text-white text-2xl border-[#A1A1A1] bg-transparent float-left" />
                <button className='w-1/5 h-auto bg-[#548D01] text-2xl text-white hover:bg-[#7CD900] hover:shadow-xl rounded'>+</button>               
            </div>
            <div className='w-full flex flex-col mt-2'>   
            {showData.detail.map((sdata, index) =>     
                <div className='mt-2' key={`show_data_${index}`}>  
                    <li className="w-4/5 h-1/5 text-white text-2xl  float-left">{sdata}</li>                    
                    <img className='w-1/5 h-1/5 text-center text-white ml-3' src="/img/cancel.png" alt="cancel" width="30" height="30"/>
                </div>
            )}
            </div>
        </div>  
    );
}

