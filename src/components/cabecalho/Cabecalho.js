import React from 'react'
import CabecalhoStyled from './CabecalhoStyled';
import { Link } from 'react-router-dom';

function Cabecalho(){
    return (
        <CabecalhoStyled>
            <div id="logo" class="centralize">
                <div>
                    <img src="images/logo.png" alt="logo" id="img1" />
                </div>
                <div class="lista">
                    <ul>
                        <li class="li"><Link to="/">Home</Link> |</li>
                        <li class="li"><Link to="/quem-somos">Quem somos</Link> |</li>
                        <li class="li"><Link to="/contatos">Contato</Link></li>
                        
                    </ul>
                </div>
            </div>
        </CabecalhoStyled>
    );
}
export default Cabecalho;