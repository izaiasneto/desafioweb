import React from "react"
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar.js";
import Footer from "../../components/Footer/Footer.js";


/* Componente de ordem superior layout faz a chamada dos componentes 
Toolbar e Footer, que são os elementos comuns em todas
as páginas. */


const layout = props => (
    <div className={classes.Layout}>
       
        <Toolbar/>
        <div className={classes.Main}>
            <main>{props.children}</main>
        </div>
       
            <Footer/>
        
        
    </div>
    
)

export default layout;