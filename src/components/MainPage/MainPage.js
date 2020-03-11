import React, { Component } from "react";
import classes from "./MainPage.module.css";
import ListUsers from "../../containers/Users/ListUsers/ListUsers"




class MainPage extends Component {
    render(){
        return (
            <div className={classes.MainPage}>
                <ListUsers/>
            </div>
        );
    }
}

export default MainPage;