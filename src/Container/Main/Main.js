import React,{useEffect,useState} from 'react';
import classes from './Main.module.css'
import Layout from '../../Components/UI/Layout/Layout';


import Newsbox from '../../Components/Newsbox/Newsbox';
import { connect } from 'react-redux';
import * as actionCreator from '../../Store/index'
import Loader from '../../Components/UI/Loader/Loader';
import Paginations from '../../Components/UI/Paginations/Paginations';

function Main(props) {
    
    const [currentPage,setCurrentPage]=useState(1);
    const [newsPerPage]=useState(4);
   
    useEffect(() => {
      
        props.fetchSearchNews()
        
    },[])

    //get current news page
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = props.news.slice(indexOfFirstNews,indexOfLastNews);

    let news;
    if(props.news){
        news=<Newsbox news={currentNews}/>
    }
    else{
        console.log("loader");
        news=<Loader/>
    }
   
    const paginate =(pageNumbet)=>{
        setCurrentPage(pageNumbet);
    }
    return (
        <Layout>
        <div className={classes.Main}>

            {news}
            <Paginations
             newsPerPage={newsPerPage} 
             totalNews={props.news.length}
             paginate={paginate}/>
        </div>
        </Layout>
    )
}

const mapStateToProps=state=>{
    return{
        search:state.search,
        news:state.news
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        fetchSearchNews:()=>dispatch(actionCreator.initNews())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
