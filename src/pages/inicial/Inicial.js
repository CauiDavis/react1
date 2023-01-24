import React from "react";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Capa from "../../components/capa/Capa";
import Paragrafo from "../../components/paragrafo1/Paragrafo";
import Rodape from "../../components/rodape/Rodape";

function Inicial(){
    return (
        <React.Fragment >
            <body background="images/fundo.png">
                <Cabecalho />
                <Capa />
                <Paragrafo />
                <Rodape />
            </body>
        </React.Fragment>
    );
}
export default Inicial;