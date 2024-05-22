// A SIMPLE LOADING OR LOADER COMPONENT FOR THE APPLICAION.
// IT TAKES EFFECT WHEN THE PAGE OR SITE IS VISITED OR A RELOAD HAPPENS.

import React from 'react';
import Image from 'next/image'

const Loader = () => {
    return (
        <div className='w-full h-full flex justify-center items-center m-auto'>
            <Image
                src={'/svg/loader.svg'}
                alt='Loading svg'
                width={200}
                height={100}
                className='w-20 h-20'
            />
        </div>
    );
};

export default Loader;
