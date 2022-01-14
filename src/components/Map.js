import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 25.627913,
    lng: 88.633179
};

const Map = () => {
    return (
        <div>
            <h2>My google map</h2>
        </div>
    );
};

export default Map;