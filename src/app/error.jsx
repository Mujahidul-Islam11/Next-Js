"use client"
import React from 'react';

const error = () => {
    return (
        <div className='text-center h-screen items-center flex justify-center gap-4'>
            <h3 className='text-7xl font-semibold'>404</h3>
            <h3 className='text-7xl font-semibold'>|</h3>
            <h2 className='text-3xl'>Oops! Something went wrong</h2>
        </div>
    );
};

export default error;