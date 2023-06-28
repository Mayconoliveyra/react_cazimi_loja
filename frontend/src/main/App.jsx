import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import React from "react"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"

import Cabecalho from "../componentes/modelo/Cabecalho"
import NavegadorFixo from "../componentes/modelo/NavegadorFixo"
import Rodape from "../componentes/modelo/Rodape"


function app(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <Cabecalho />
                <NavegadorFixo />
                <Routes />
                <Rodape />
            </div>
        </BrowserRouter>

    )
}
export default app

