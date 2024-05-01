import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            error: null 
        }

        this.acessar = this.acessar.bind(this);
    }

    async acessar() {
        const { email, senha } = this.state;

      
        if (!email || !senha) {
            this.setState({ error: 'Por favor, preencha todos os campos.' });
            return;
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(email, senha);
            window.location.href = './Dashboard';
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        const { error } = this.state;

        return (
            <div className="mainLogin">
                <h1>Login</h1>
                {error && <p className="error">{error}</p>}
                <p>Usuario<input type="text" placeholder="E-mail" onChange={(e) => this.setState({ email: e.target.value })} /></p>
                <p>Senha<input type="password" placeholder="Senha" onChange={(e) => this.setState({ senha: e.target.value })} /></p>
                <button onClick={this.acessar}>Fazer login</button>
                <Link className="link" to="/Cadastro">Criar conta</Link>
            </div>
        );
    }
}

export default Login;
