import styled from "styled-components";
import { backgroundBoxShadow, backgroundDarkGreen, colorDarkGreen, colorHeroText } from './../../components/UI/Colors'

export const ContentSelecaoDeClientes = styled.section `
    width: calc(85% - 20px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
    background-color: ${colorHeroText};
    box-shadow: 0 6px 12px ${backgroundBoxShadow};
    border-radius: 10px;
    
    h2 {
        font-size: 2em;
        font-weight: 500;
        margin-bottom: 30px;
    }
    
    .box__search {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
    }

    input {
        margin: 0px;
    }

    .box__search > button {
        padding: 0 ;
        order:-1;
        width: 40px;
        margin-left: 5px;
        background-color: ${backgroundDarkGreen};
    }

    .box__search > button:hover {
        transition: background-color 0.3s, transform 0.2s;
        background-color: ${colorDarkGreen};
    }

    .box__search > button > img {
        width: 20px;
    }
`;