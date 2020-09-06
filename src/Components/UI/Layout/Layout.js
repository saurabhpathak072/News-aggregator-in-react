import React from 'react'
import Searchbar from '../../Searchbar/Searchbar'
import classes from './Layout.module.css'

function Layout(props) {
    return (
        <div>
            <header>
                <Searchbar/>
            </header>
            <main className={classes.newsContainer}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout
