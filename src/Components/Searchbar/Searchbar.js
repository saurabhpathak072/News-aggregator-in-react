import React,{useState} from 'react'
import classes from './Searchbar.module.css'
import { connect } from 'react-redux'
import * as actionCreator from '../../Store/index';
import Toggle from '../UI/Toggle/Toggle';

function Searchbar(props) {
    const [search, setSearch] = useState('')
    // const [isSearch, setisSearch] = useState(false)

    const updateSearch=(e)=>{
        setSearch(e.target.value);
        if(search){
       
          props.onSetSearchValue(e.target.value);
        }
        else{
            props.fetchSearchNews();
        }
    }
    let searchbartheme,headingtheme;
    if(props.theme){
        searchbartheme=classes.searchbar
        headingtheme=classes.heading
    }
    else{
        searchbartheme=classes.darksearchbar
        headingtheme=classes.darkheading
    }
    return (
        <div>
            <div className={classes.toggleswitch}>
    {props.theme?<span>Dark Theme Enabled</span>:<span>Light Theme Enabled</span>}<Toggle/>
            </div>
        <div className={headingtheme}>
            
            <span>News Aggregator</span>
        </div>
        <div className={searchbartheme}>
            <input
             type="text"
             placeholder="Type and press Enter to search"
             value={search}
             onChange={updateSearch} />
        </div>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        theme:state.darktheme
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        onSetSearchValue:(search)=>dispatch(actionCreator.setSearchValue(search)),
        fetchSearchNews:()=>dispatch(actionCreator.initNews())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Searchbar);
