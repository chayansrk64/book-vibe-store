import React from 'react';
import { Map} from '@vis.gl/react-google-maps';

const GoogleMap = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='flex items-center justify-center'>

                <div className='w-1/2 flex flex-col items-center'>
                    <h3 className='text-3xl font-semibold my-3'>Search Location</h3>
                    <p>Where you are get to know </p>
                </div>

                <div className='w-1/2'>
                    <Map
                    style={{width: '640px', height: '400px'}}
                    defaultCenter={{lat: 22.54992, lng: 0}}
                    defaultZoom={3}
                    gestureHandling='greedy'
                    disableDefaultUI
                    />

                </div>
            </div>
        </div>
    );
};

export default GoogleMap;