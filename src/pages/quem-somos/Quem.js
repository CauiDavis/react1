import React from "react";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Paragrafo2 from "../../components/paragrafo2/Paragrafo2";
import Rodape from "../../components/rodape/Rodape";

function Quem(){
    return (
        <React.Fragment >
            <body background="images/fundo2.png">
                <Cabecalho />
                <Paragrafo2 />
                <Rodape />
            </body>
        </React.Fragment>
    );
}
export default Quem;