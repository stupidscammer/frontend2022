import React from 'react';
export function Natrition(props) {
    const { showData } = props;
    return (
        <div >
            <div>
                <label className='text-white text-3xl '>{showData.title}</label>
            </div>
            <div className='w-full text-xl text-white flex flex-col mt-2'>
                {showData.detail.map((sdata, index) =>
                    <div className='mt-2' key={`show_data_${index}`}>
                        <div className='w-full flex flex-row'>
                            <div className='w-2/3' >
                                <label className='w-full text-2xl'>{sdata}</label>
                            </div>
                            <div className='w-1/3'>
                                <div className='w-full flex flex-row '>
                                    <div className='min-w-max		 border-2'>Min</div>
                                    <div className='w-1/5'>-</div>
                                    <div className='min-w-max		 border-2'>Max</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


