import styled from "styled-components";
import { backgroundBoxShadow, backgroundDarkerOrange, backgroundOrange, colorHeroText, shadowAfterColor, shadowBeforeColor } from "../../components/UI/Colors";

export const ContentDeposito = styled.section `
    background-color: ${backgroundOrange};
    color: ${colorHeroText};
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 6px 12px ${backgroundBoxShadow};
    max-width: 400px;
    width: 100%;
    margin-top: 20px;
    
    text-align: center;

    position: relative;

    &:hover {
        background-color: ${backgroundDarkerOrange};
    }

    &::after {
        content: "";
        width: 92%;
        height: 10px;
        background-color: ${shadowAfterColor};
        position: absolute;
        top: 99%;
        left: 4%;
        right: 4%;
        z-index: -1;
        border-radius: 0 0 10px 10px;
    }

    &::before {
        content: "";
        width: 84%;
        height: 20px;
        background-color: ${shadowBeforeColor};
        position: absolute;
        top: calc(103% - 10px);
        left: 8%;
        right: 8%;
        z-index: -1;
        border-radius: 0 0 10px 10px;
    }

    
    legend {
        font-size: 1.3em;
        margin: 0;
        font-weight: 500;
    }

    input {
        margin: 20px 0;
        font-size: 1em;
        font-weight: 600;
    }

    button {
        margin-top: 10px;
        padding: 13px 25px;
    }

    @media (max-width: 480px) {
        max-width: 200px;
        legend {
            font-size: 0.9rem;
        }

        input {
            font-size: 0.7rem;
            font-weight: 500;
        }

        button {
            font-size: 0.8rem;
            padding: 10px 25px;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        max-width: 350px;
        legend {
            font-size: 1.2rem;
        }

        input {
            font-size: 0.9rem;
            font-weight: 600;
        }

        button {
            font-size: 0.9rem;
            padding: 12px 25px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 350px;
        legend {
            font-size: 1.3em;
        }

        input {
            font-size: 0.9rem;
            font-weight: 600;
        }

        button {
            font-size: 1rem;
            padding: 12px 25px;
        }
    }
`;