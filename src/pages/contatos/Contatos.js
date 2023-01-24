import React from "react";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Paragrafo3 from "../../components/paragrafo3/Paragrafo3";
import Rodape from "../../components/rodape/Rodape";

function Contatos(){
    return (
        <React.Fragment >
            <body background="images/fundo2.png">
                <Cabecalho />
                <Paragrafo3 />
                <Rodape />
            </body>
        </React.Fragment>
    );
}
export default Contatos;