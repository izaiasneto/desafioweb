import React, { Component } from "react";
import Input from "../../../components/UI/Input/Input"
import classes from "./SearchTool.module.css";

/* Container SearchTool constrói um form e apresenta dois 
componentes input de text  permitindo a filtragem dos usuarios.*/

class SearchTool extends Component {
  state = {
    searchForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Buscar por nome do usuario"
        },
        value: "",
        title: "Buscar por nome:"
      },

      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Buscar por email "
        },
        value: "",
        title: "Buscar por email:"
      },
    
    }
  };

  inputChangedHandler = (event, inputIdentifier, inputHandler) => {
    if (!this.props.isLoading) {
      const updatedSearchForm = {
        ...this.state.searchForm
      };
      const updatedFormElement = {
        ...updatedSearchForm[inputIdentifier]
      };
      updatedFormElement.value = event.target.value;
      updatedSearchForm[inputIdentifier] = updatedFormElement;
      this.setState({ searchForm: updatedSearchForm });
      inputHandler(updatedSearchForm);
    }
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.searchForm) {
      formElementsArray.push({
        id: key,
        config: this.state.searchForm[key]
      });
    }

    let form = (
      <form>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            
            changed={event =>
              this.inputChangedHandler(
                event,
                formElement.id,
                this.props.inputHandler
              )
            }
          />
        ))}
      </form>
    );
    return (
      <div className={classes.SearchTool}>
        <h1>Buscar Usuários:</h1>
        {form}
        <h4
        >
          Usuários Encontrados: {this.props.foundUsers}
        </h4>
      </div>
    );
  }
}

export default SearchTool;