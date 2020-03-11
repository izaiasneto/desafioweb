import React from 'react'
import classes from "./Users.module.css"


const users = props => (
  <div className={classes.Users} >
    <h1>
      <strong>{props.children}</strong>
    </h1>
    <div className={classes.Users2} >
    <img class="img-thumbnail" src= {props.img} alt="avatar img"/>
      <div className={classes.Users3}>
           <p>Email: {props.email}</p>
           <p>Cell: {props.cell}</p>
      </div>
    </div>
    
   
  </div>
);



export default users;

