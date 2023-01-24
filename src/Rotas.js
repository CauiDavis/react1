import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contatos from './pages/contatos/Contatos';
import Inicial from './pages/inicial/Inicial';
import Quem from './pages/quem-somos/Quem';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Inicial />} />
                <Route path="/contatos" element={<Contatos />} />
                <Route path="/quem-somos" element={<Quem />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;