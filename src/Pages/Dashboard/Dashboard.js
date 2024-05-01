import React, { Component } from "react";
import firebase from "../../Firebase";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome:"",
            
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
                        })
                    })
                }
            })
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                Nome: {this.state.nome}
                Sobrenome: {this.state.sobrenome}
            </div>
        );
    }
}

export default Dashboard;