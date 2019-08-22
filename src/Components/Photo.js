import React from 'react';

// displays a photo 


const Photo = ({ src }) => {
    return (
        <li>
            <img src={src} alt={src} />
        </li>
    )
}

export default Photo;
