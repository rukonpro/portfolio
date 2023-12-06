import React from 'react'

export default function Loader() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </div>
    )
}
