import styled from "styled-components";
import { backgroundDarkGreen } from "../UI/Colors";

export const ContentTextArea = styled.div `
    textarea {
        max-width: calc(100% - 22px);
        min-width: calc(100% - 22px);
        max-height: 100px;
        min-height: 100px;
        padding: 12px;
        margin-bottom: 15px;
        border: 1px solid ${function({ $borda }) {return $borda}};
        border-radius: 5px;
        background-color: ${function({ $corDeFundo }) {return $corDeFundo}};
        color: ${function({ $corBg }) {return $corBg}};

        outline-color: ${backgroundDarkGreen};
    }
`;

/* 
    @media (max-width: 480px) {
    }

    @media (min-width: 481px) and (max-width: 767px) {
    }

    @media (min-width: 768px) and (max-width: 1024px) {
    }

    @media (min-width: 1025px) and (max-width: 1200px) {
    }

    @media (min-width: 1201px) {
    }
*/