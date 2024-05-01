// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       titulo: "Login",
//       acessar: "Acessar",
//       email: "",
//       senha: "",
//       mostrarMensagem: false,
//       mensagemErro: "",
//       feed: [{ id: 1, email: "eduardo.lino@pucpr.br", senha: "123456" }],
//     };
//     this.mostrar = this.mostrar.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   mostrar() {
//     const { email, senha, feed } = this.state;
//     const usuarioEncontrado = feed.find(
//       (usuario) => usuario.email === email && usuario.senha === senha
//     );

//     if (usuarioEncontrado) {
//       this.setState({
//         acesso: "Acessado com sucesso!",
//         mostrarMensagem: true,
//         mensagemErro: "",
//       });
//     } else {
//       this.setState({
//         mostrarMensagem: false,
//         mensagemErro: "E-mail ou senha incorretos",
//       });
//     }
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   render() {
//     return (
//       <div className="formulario">
//         <h1>{this.state.titulo}</h1>
//         <input
//           type="text"
//           size={25}
//           name="email"
//           placeholder="E-mail"
//           value={this.state.email}
//           onChange={this.handleChange}
//         />
//         <input
//           type="password"
//           size={25}
//           name="senha"
//           placeholder="Senha"
//           value={this.state.senha}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.mostrar}>{this.state.acessar}</button>
//         {this.state.mostrarMensagem && <p className="correto">{this.state.acesso}</p>}
//         {this.state.mensagemErro && <p className="mensagemErro">{this.state.mensagemErro}</p>}
//       </div>
//     );
//   }
// }
// export default App;
