
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro';
import Dashboard from './Pages/Dashboard/Dashboard';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;