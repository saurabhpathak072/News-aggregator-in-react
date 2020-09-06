import React from 'react'
import classes from './Newcard.module.css'
import { connect } from 'react-redux'

function Newcard(props) {
    // let theme;
    // if(props.theme){

    // }
    // else{

    // }
    return (
        <div className={classes.newscard}>
            <div className={props.theme?classes.newscard__content:classes.darknewscard__content}>
            <img src={props.newscard.urlToImage} alt="newsImage"/>
            <p>title: {props.newscard.title}</p>
            <p>articles: {props.newscard.description}</p>
            <p>author:{props.newscard.author}</p>
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
