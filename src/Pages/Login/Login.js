import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: ""
          
        }

        this.acessar = this.acessar.bind(this);
    }

    async acessar(){

        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(()=>{
            window.location.href = './Dashboard'
        })
        .catch((error) => {
            
        });
    }


  render() {
    return (
      <div className="mainLogin">
        <h1>Login</h1>
        <p>Usuario<input type="text" placeholder="E-mail" onChange={(e)=> this.setState({email:e.target.value})} /></p>
        <p>Senha<input type="password" placeholder="Senha" onChange={(e)=> this.setState({senha:e.target.value})}/></p>
        <button onClick={this.acessar}>Fazer login</button>
        <Link className="link" to="/Cadastro">Criar conta</Link>
      </div>
    );
  }
}

export default Login;
