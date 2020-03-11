import React from "react";

import classes from "./Toolbar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationItems from "../NavigationItems/NavigationItems";


/* Componente Toolbar é extremamente simples, seu objetivo é apenas
chamar o componente NavigationItems dentro de um componente nav
e aplicar um display flex nos NavigationItems*/

const toolbar = props => (
    <header className={classes.Toolbar}>

      <div className={classes.logo}>
        
        <p>SisEnex</p>
        
      </div>
      <nav >
            <NavigationItems/>
      </nav>
    </header>
  );
  
  export default toolbar;