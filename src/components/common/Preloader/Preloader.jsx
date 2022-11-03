import React from "react";
import d from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={d.preloader}>
            <img src='https://thumbs.gfycat.com/MadeupWillingKronosaurus-max-1mb.gif' alt='preloader'/>
        </div>
    )
}

export default Preloader;