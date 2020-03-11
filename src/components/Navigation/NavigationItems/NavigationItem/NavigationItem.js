import React from "react";
import { NavLink} from "react-router-dom";
import classes from "./NavigationItem.module.css";


/* Essa componente faz a chamada do componente NavLink do react-router-dom,
que permite aplicar um stylesheet quando o link estiver ativado
no momento. Além disso, ele recebe através do props, os 
dados necessários para a configuração do mesmo */


const navigationItem = props =>(
    <li className={classes.NavigationItem}>
    <NavLink
        to={props.link}
        exact={props.exact}
        activeClassname={classes.active}
    >
        {props.children}
        </NavLink>
    </li>
);

export default navigationItem;