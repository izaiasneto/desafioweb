import React, { Component } from "react";
import classes from "./RegisterPage.module.css";
import AddUsers from "../../containers/Users/AddUsers/AddUsers"

class RegisterPage extends Component {
    render(){
        return (
            <div className={classes.RegisterPage}>
                <h1>  
                     Cadastro de Usuários
             </h1>
               <AddUsers/>
            </div>
        );
    }
}

export default RegisterPage;