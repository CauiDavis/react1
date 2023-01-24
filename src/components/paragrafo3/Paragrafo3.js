import React from "react";
import Paragrafo3Styled from "./Paragrafo3Styled";

function Paragrafo3() {
    return (
        <Paragrafo3Styled>
            <div class="centralize">
                <h2>Entre em contato</h2>
                <p> Lorem Ipsum simply dummy text of the printing and
                    typesetting industry.
                </p>
                <hr />
                <form action="">
                    Seu email: <br />
                    <input type="email" name="email" /><br />
                    Assunto: <br />
                    <input type="text" name="texto" /><br />
                    Descrição: <br />
                    <textarea></textarea><br />
                    <input type="button" value="enviar" />
                </form>
            </div>
        </Paragrafo3Styled>
    );
}
export default Paragrafo3;