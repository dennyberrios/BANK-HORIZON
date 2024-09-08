import styled from "styled-components";
import { backgroundDarkGreen } from "../UI/Colors";

export const BoxInput = styled.div `
    
    input {
        width: calc(100% - 22px);
        padding: 12px;
        margin-bottom: 15px;
        border: 1px solid ${function({ $borda }) {return $borda}};
        border-radius: 5px;
        background-color: ${function({ $corDeFundo }) {return $corDeFundo}};
        color: ${function({ $corBg }) {return $corBg}};
        outline-color: ${backgroundDarkGreen};
    }
`;