import React from "react"
import "./Cabecalho.css"
import logoImg from "../../assets/logo.png"

function cabecalho(props) {
    return (
        <header className="cabecalho conteiner-flex">
            <div className="logo">
                <a href="/" className="ml-1">
                    <img src={logoImg} alt="Logo" />
                </a>
            </div>
            <div className="inputPesquisa">

                <input type="text" />

            </div>
            <div className="minhaConta">
                <a href="/">
                    Entrar
                </a>
            </div>
            <div className="meuCarrinho">
                <a href="/">
                    <i className="fa fa-shopping-bag fa-lg"></i>
                </a>
            </div>
        </header>
    )
}

export default cabecalho;
