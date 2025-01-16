import "./Carousel.css";
import "./css.css";

import React from 'react';
const wallpaper = ({img, darck})=>{

    let url= "/img/"+img;
    let url_darck= "/img/"+darck;

    return (
        <>
            <img src={url} className="full dark:hidden"/>

            <img src={url_darck} className="full dark:block hidden"/>
        </>
        
        
    );
}

export default wallpaper;