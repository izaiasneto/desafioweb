import React from "react";
import classes from "./Footer.module.css";


/* Componente Footer apresenta os elementos do rodapé da aplicação*/

const footer = props => (
    <React.Fragment>
        <div className={classes.Footer}>
            <p>Desenvolvido por Izaias Neto</p>
        </div>

    </React.Fragment>
);

export default footer;