import React, {Component} from "react";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";
import "./Cadastro.css"

class Cadastro extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            email: "",
            dataNascimento: "",
            senha: ""
                  
        }

        this.cadastrar = this.cadastrar.bind(this);
    }

    async cadastrar(){

        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then(async(retorno) => {

            await firebase.firestore().collection("usuarios").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                dataNascimento: this.state.dataNascimento,
            });



        });

        // await firebase.firestore().collection('usuarios').add({
        //     nome: this.state.nome,
        //     sobrenome: this.state.sobrenome,            
        // }); 
    }

    render(){
        return (
            <div className="mainCadastro">
                <h1>Cadastro</h1>
                <p>Nome:<input label='nome' type="text" placeholder="Ex: Maria" onChange={(e)=>this.setState({ nome: e.target.value})}/></p>
                <p>Sobrenome:<input type="text" placeholder="Ex: Santos" onChange={(e)=>this.setState({ sobrenome: e.target.value})}/></p>
                <p>E-mail:<input type="text" placeholder="Ex: Maria.Santos@example.com" onChange={(e)=>this.setState({ email: e.target.value})}/></p>
                <p>Data de Nascimento:<input type="text" placeholder="21/12/2001" onChange={(e)=>this.setState({ dataNascimento: e.target.value})}/></p>
                <p>Senha:<input type="password" placeholder="******" onChange={(e)=>this.setState({ senha: e.target.value})}/></p>
                <button onClick={this.cadastrar}>Cadastrar</button>
                <Link className="link" to="/">Login</Link>
            </div>
        );
    }
};

export default Cadastro;