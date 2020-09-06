import React from 'react';
import './App.css';
import Main from './Container/Main/Main';
import { connect } from 'react-redux';

function App(props) {
  console.log(process.env);
  let theme;
  if(props.theme){
    theme="darkApp"
  }
  else{
    theme="lightApp"
  }

  return (
    <div className={theme}>
      <Main/>
    </div>
  );
}
const mapStateToProps=state=>{
  return{
    theme:state.darktheme
  }
}

export default connect(mapStateToProps)(App);
