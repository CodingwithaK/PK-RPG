import React from 'react';

export default function Sprite( {image, data} ){
// x and y are the starting coordinates for the sprite 
// h and w are constants for the sprites height and width
const {y, x, h, w} = data

return <div
style={{
    // inline-block allows you to set height and width
    display:"inline-block",
    height:`${h}px`,
    width:`${w}px`,
    //string template of image prop
    backgroundImage:   `url(${image})`,
    backgroundRepeat: "no-repeat", 
    // starting point for height and width 
    // the reason it is negative is cause you are shifting the axis not the image itself
    backgroundPosition: `-${x}px -${y}px`,
}}
/>

}

