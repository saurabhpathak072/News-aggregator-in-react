import * as actionType from '../actionTypes/actionType';

const initialState={
    searchValue:'',
    error:false,
    news:[],
    darktheme:false
}

export const reducer=(state=initialState,actions)=>{
    switch(actions.type){
        case  actionType.SET_SEARCH_VALUE:
            return{
                ...state,
                news:actions.searchNews
            }
        case actionType.INIT_NEW:
            return{
                ...state,
                news:actions.news
            }
        case actionType.CHANGE_THEME:
            return{
                ...state,
                darktheme:actions.theme
            }
            default:
            return state;
    }
    
}