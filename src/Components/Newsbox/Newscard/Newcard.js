import React from 'react'
import classes from './Newcard.module.css'
import { connect } from 'react-redux'

function Newcard(props) {
    return (
        <div className={classes.newscard}>
            <div className={props.theme?classes.newscard__content:classes.darknewscard__content}>
            <img src={props.newscard.urlToImage} alt="newsImage"/>
            <p> {props.newscard.title}</p>
            <p> {props.newscard.description}</p>
            <p className={classes.author}>{props.newscard.author?`- ${props.newscard.author}`:null}</p>
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        theme:state.darktheme
    }
}

export default connect(mapStateToProps)(Newcard);
