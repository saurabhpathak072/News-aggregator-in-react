import * as actionType from '../actionTypes/actionType';
import Axios from 'axios';

const updateSearchNew= (searchNews)=>{
    return {
        type:actionType.SET_SEARCH_VALUE,
        searchNews:searchNews
    }
}

export const setSearchValue =(searchValue)=>{
    console.log("seaSearch",searchValue);
    return dispatch=>{
    Axios.get(`https://newsapi.org/v2/top-headlines?q=${searchValue}&country=in&apiKey=ccfabccb0fad4ddea705165a2ea65eda`)
    .then(res=>dispatch(updateSearchNew(res.data.articles)))
    .catch(err=>console.log(err))
    }
    
}

export const setNews = (news)=>{
    return{
        type:actionType.INIT_NEW,
        news:news
    }
}

export const initNews =()=>{
    return dispatch=> {
        Axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=ccfabccb0fad4ddea705165a2ea65eda`)
        .then(res=>{dispatch(setNews(res.data.articles))})
        .catch(err=>console.log(err))
    }
}

export const changeTheme = (theme)=>{
    return{
        type:actionType.CHANGE_THEME,
        theme:theme
    }
}