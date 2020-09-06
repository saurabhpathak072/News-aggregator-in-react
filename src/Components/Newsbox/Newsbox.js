import React from 'react'
import Newcard from './Newscard/Newcard';
import classes from './Newsbox.module.css';
import Loader from '../UI/Loader/Loader';

function Newsbox(props) {
    let NewCard;
  
    if(!props.news){
        console.log("Loader")
        NewCard=<Loader/>
    }
    else{
        NewCard=props.news.map((newsitem,index)=>{
            return(
                
                    <Newcard key={index} newscard={newsitem}/>
                
            )
        })
    }
    return (
        <div className={classes.newsbox}>
            {props.news?NewCard:<Loader/>}
            
        </div>
    )
}

export default Newsbox
