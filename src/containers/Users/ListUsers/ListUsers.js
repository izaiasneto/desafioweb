import React, { Component } from 'react';
import classes from "./ListUsers.module.css"
import SearchTool from "../SearchTool/SearchTool"
import Spinner from "../../../components/UI/Spinner/Spinner"
import Users from './Users/Users';
import axios from 'axios';


class ListUsers extends Component{
    state ={
        users: [],
        displayUsers: [],
        chosenUsersNum: 0,
        UsersNum: 0,
        loadNum: 0,
        loading: true     
    }

    
    componentDidMount() {
        axios.get("http://localhost:4000/users")
          .then(res => {
            const updatedDisplayUsers = res.data;
            this.setState({ 
                users: updatedDisplayUsers,
                displayUsers: updatedDisplayUsers,
                chosenUsersNum: updatedDisplayUsers.length,
                UsersNum: updatedDisplayUsers.length,
                loading: false
            });
          })

          .catch(err =>{
              this.setState({ 
                  loading: false
              });
          });
    };

    inputChangedHandler = SearchForm => {
        let updatedDisplayUsers = [...this.state.users].filter(
          usr =>
            usr.name
            .toLowerCase()
            .includes(SearchForm["name"].value.toLowerCase()) &&
            usr.email
            .toLowerCase()
            .includes(SearchForm["email"].value)
        );
        if (
          SearchForm["name"].value === "" &&
          SearchForm["email"].value === "" 
          
        ) {
          this.setState({
            displayUsers: updatedDisplayUsers,
            usersNum: this.state.chosenUsersNum
          });
        } else {
          this.setState({
            displayUsers: updatedDisplayUsers,
            usersNum: 10
          });
        }
      };

      loadUsersHandler = () => {
        let UsersLeft =
          this.state.displayUsers.length - this.state.usersNum;
        let updatedUsersNum = this.state.usersNum;
        if (UsersLeft < 50) {
          this.setState({
            usersNum: updatedUsersNum + UsersLeft
          });
        } else {
          this.setState({ usersNum: updatedUsersNum + 50 });
        }
      };

    render(){
        let users = null;
        let loadUsersBar = null;

        if(!this.state.loading){
            if(this.state.displayUsers.length > 0){
                users = this.state.displayUsers
                    .slice(0, this.state.usersNum)
                    .map(usr =>(
                        <Users
                            key={usr.id}
                            img={usr.avatarUrl}
                            email={usr.email}
                            cell={usr.cell}
                         >
                          {usr.name}
                         </Users>
                    ));

                   if(this.state.displayUsers.length - this.state.usersNum > 0){
                       loadUsersBar = (
                        <div
                        className={classes.LoadUsers}
                        onClick={this.loadUsersHandler}
                      >
                        Carregar mais usuarios (
                        {this.state.displayUsers.length - this.state.usersNum})
                      </div>
                       );
                   }
            } else {
                users = (
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>
                        Nenhum usuário encontrado!
                    </p>
                );
            }
        } else {
            users = <Spinner/>
        }
        return(
           <React.Fragment>
               <div className={classes.ListUsers}>
              
                     <SearchTool
                        inputHandler={this.inputChangedHandler}
                        foundUsers={this.state.displayUsers.length}
                        isLoading={this.state.loading}
                     />
                     {users}

               </div>
               
           </React.Fragment>
          
        )
    }
}

export default ListUsers;