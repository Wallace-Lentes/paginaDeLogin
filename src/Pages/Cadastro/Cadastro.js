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
            senha: "",
            error: null
                  
        }

        this.cadastrar = this.cadastrar.bind(this);
    }

    async cadastrar() {
        const { nome, sobrenome, email, dataNascimento, senha } = this.state;
    
        if (!nome || !sobrenome || !email || !dataNascimento || !senha) {
            this.setState({ error: 'Por favor, preencha todos os campos.' });
            console.log(this.state.error); 

            return;
        }
    
        try {
            const retorno = await firebase.auth().createUserWithEmailAndPassword(email, senha);
    
            await firebase.firestore().collection("usuarios").doc(retorno.user.uid).set({
                nome,
                sobrenome,
                dataNascimento,
            });
    
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            alert(`Erro ao cadastrar: ${error.message}`);
        }
    }
    

    render(){
        const { error } = this.state;
        return (
            <div className="mainCadastro">
                <h1>Cadastro</h1>
                {error && <p className="error">{error}</p>}
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