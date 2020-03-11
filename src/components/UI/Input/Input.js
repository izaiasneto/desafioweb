import React from "react";
import classes from "./Input.module.css";

/* Componente Input serve um como input genérico,
ele espera receber um prop chamado elementType que especifica
que tipo de input ele vai ser (no momento, apenas input e select), 
um prop chamado elementConfig que vai definir a configuração 
daquele input, e dois props value e changed, que vão determinar
o valor atual do input e o que vai acontecer toda vez que o
componente input receber alguma alteração pelo usuário */

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={classes.InputElement}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
