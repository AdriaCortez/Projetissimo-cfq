//Esse daqui cria as rotas do navegador

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "../Pages/Cadastro/App.jsx";

function Gerenciador() {

    return (
        <BrowserRouter> {/*O browser router gerencia a rota de navegação, mantém a interface sincronizada com a URL */}
            <Routes> {/*Navega entre diferentes páginas */}
                <Route path="/App" element={<Formulario />} /> {/*Basicamente, toda vez que eu colocar /app depois de Localhost
                no navegador, vai renderizar o mu Formulario */}
            </Routes>  
        </BrowserRouter>

    );

}

export default Gerenciador;
