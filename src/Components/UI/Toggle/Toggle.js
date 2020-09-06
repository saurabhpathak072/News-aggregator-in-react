import React from 'react'
import './Toggle.css';
import { connect } from 'react-redux';
import *  as actionCreator from '../../../Store/index';

function Toggle(props) {
    return (
        <>
            <label className='switch'>
            <input  type="checkbox" onClick={(e)=>{console.log('[darktheme]',e.target.checked);props.onChangeTheme(e.target.checked)}}/>
            <span className="slider round"></span>
            </label>
        </>
    )
}

const mapdispatchtoprops = dispatch=>{
    return{
        onChangeTheme:(theme)=>dispatch(actionCreator.changeTheme(theme))
    }
}

export default connect(null,mapdispatchtoprops)(Toggle);
