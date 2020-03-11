import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem.js";


/* Componente NavigationItems faz a chamada dos componentes 
NavigationItem e define as URLs e o nome dos itens de navegação
através dos props, caso queira adicionar um novo elemento de navegação
na Toolbar, basta adicionar um NavigationItem aqui e depois 
tratar a URL no componente principal App */

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
      
    <NavigationItem link="/" exact>
      Home
    </NavigationItem>
    <NavigationItem link="/register" exact>
      Adicionar Usuário
    </NavigationItem>
   
  </ul>
);

export default navigationItems;
