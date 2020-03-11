
import React from "react";
import Layout from "./hoc/Layout/Layout.js";
import MainPage from "./components/MainPage/MainPage.js";
import RegisterPage from "./components/RegisterPage/RegisterPage"
import {Route, Switch} from "react-router-dom";



/* Componente principal App faz a chamada do componente de ordem superior Layout
para definir as limitações da página, o cabeçalho e o rodapé. App também
faz a chamada do componente Switch e dos componentes Route para definir que
componente deve ser apresentado de acordo com a navegação do usuário */


function App() {
  return(
    <Layout>
      <Switch>
         <Route path="/" exact component={MainPage}/>
         <Route path="/register" exact component={RegisterPage}/>
         
      </Switch>
    </Layout> 
  );
}


  export default App;

