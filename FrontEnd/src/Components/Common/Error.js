import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';
const Error = () => {
  function changeHandler(){
    <Link to='/home'></Link>
    console.log("Clicked");
  }
  return (
    <div className="container">
      <div className="error">
        <p className="p">4</p>
        <span className="dracula">			
          <div className="con">
            <div className="hair"></div>
            <div className="hair-r"></div>
            <div className="head"></div>
            <div className="eye"></div>
            <div className="eye eye-r"></div>
            <div className="mouth"></div>
            <div className="blod"></div>
            <div className="blod blod2"></div>
          </div>
        </span>
        <p className="p">4</p>
        <div className="page-ms">
          <p className="page-msg">Oops, the page you're looking for Disappeared</p>
          <Link to={"/"}>
          <button className="go-back "
          onClick={changeHandler}>Go Back To Home</button>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Error;