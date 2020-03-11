import { Component } from "react";
import { withRouter } from "react-router-dom";

/* Componente de ordem superior ScrollToTop serve apenas para
atualizar a posição do navegador do usuário para o topo toda
vez que o usuário navega para uma nova página */

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);