import React from 'react'
import classes from './Loader.module.css'

function Loader() {
    console.log("Loader");
    return (
        <div className={classes.loader}>
            Loader...
        </div>
    )
}

export default Loader
