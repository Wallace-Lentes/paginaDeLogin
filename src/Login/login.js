import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="password" />
                <button>Login</button>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/">Voltar</Link>
            </form>
         </div>)
}
export default Login;