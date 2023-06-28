import React from "react"
import "./NavegadorFixo.css"

function navegadorFixo(props) {
    return (
        <nav className="navegadorFixo">
            <div className="container">
                <div className="row">
                    <div className="col-2"> <span>  Mais Vendidos</span> </div>
                    <div className="col-2">Oferta da Semana</div>
                    <div className="col-2">Mais Vendidos do Mês</div>
                    <div className="col-2">Itens Novos</div>
                    <div className="col-2">Você Olhou</div>
                    <div className="col-2">Decoração</div>
                </div>
            </div>

        </nav>
    )
}
export default navegadorFixo