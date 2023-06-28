import React from "react"
import { Switch, Route, Redirect } from "react-router"
import Inicio from "../componentes/inicio/Inicio"

function routes(props) {
    return (
        <Switch>
            <Route exact path="/" componet={Inicio} />
            <Redirect from="*" to="/" component={Inicio} />
        </Switch>
    )
}
export default routes