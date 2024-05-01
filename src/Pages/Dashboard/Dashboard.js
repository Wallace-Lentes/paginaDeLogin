import React, { Component } from "react";
import firebase from "../../Firebase";
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome:"",
            dataNascimento: "",
            
        }
    }

    async componentDidMount() {
            await firebase.auth().onAuthStateChanged(async(usuarios)=>{
                if (usuarios){
                    var uid = usuarios.uid;

                    await firebase.firestore().collection("usuarios").doc(uid).get()
                    .then((retorno)=>{
                        this.setState({
                            nome: retorno.data().nome,
                            sobrenome: retorno.data().sobrenome,
                            dataNascimento: retorno.data().dataNascimento,
                        })
                    })
                }
            })
    }

    render() {
        return (
            <div className="alinDash">
                <h1>Dashboard</h1>
                Nome: {this.state.nome} <br />
                Sobrenome: {this.state.sobrenome} <br />
                Data de Nascimento: {this.state.dataNascimento}
            </div>
        );
    }
}

export default Dashboard;