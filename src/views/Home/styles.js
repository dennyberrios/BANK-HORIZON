import styled from "styled-components";
import { backgroundBoxShadow, backgroundDarkGreen, backgroundOrange, borderLightTeal, colorDarkGreen, colorHeroText, colorWhite } from "../../components/UI/Colors";


export const BemVindo = styled.section`
    width: 85%;
    height: auto;
    background-color: ${backgroundDarkGreen};

    color: ${colorHeroText};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 60px 20px;
    border-radius: 8px;

    box-shadow: 0 4px 8px ${backgroundBoxShadow};

    h1, p {
        margin: 0;
    }

    p {
        margin-top: 15px;
        margin-bottom: 20px;
        font-size: 1.2rem;
        font-weight: 300;
        text-align: center;
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 1.3rem;
        }

        p {
            font-size: 0.8rem;
        }

        button {
            font-size: 0.7rem;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        h1 {
            font-size: 1.3rem;
        }

        p {
            font-size: 1rem;
        }

        button {
            font-size: 0.9rem;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        h1 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1.1rem;
        }
    }

    @media (min-width: 1025px) and (max-width: 1200px) {
        h1 {
            font-size: 1.7rem;
        }
    }

    @media (min-width: 1201px) {
        h1 {
            font-size: 2rem;
        }
    }
`;

export const SobreNos = styled.section`
    width: 85%;
    color: ${colorHeroText};
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 60px;

    h2 {
        color: ${backgroundOrange};
        padding: 0 10px;
    }

    p {
        color: ${colorDarkGreen};
        padding: 0 10px;
    }

    hr {
        width: 100%;
        margin-top: 60px;
        height: 1px;
        background-color: ${borderLightTeal};
        border: none;
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 1.3rem;
        }

        p{
            font-size: 1.1rem;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        h2 {
            font-size: 1.3rem;
        }

        p{
            font-size: 1.1rem;
        }
    }
`;

export const Servicos = styled.section`
    width: 85%;
    color: ${colorHeroText};
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 60px;

    h2 {
        color: ${backgroundOrange};
        padding: 0 10px;
    }

    p {
        color: ${colorDarkGreen};
        padding: 0 10px;
    }

    button {
        margin: 0 10px;
    }

    hr {
        width: 100%;
        margin-top: 60px;
        height: 1px;
        background-color: ${borderLightTeal};
        border: none;
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 1.3rem;
        }

        p{
            font-size: 1.1rem;
        }

        button {
            font-size: 0.7rem;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        h2 {
            font-size: 1.3rem;
        }

        p{
            font-size: 1.1rem;
        }

        button {
            font-size: 0.9rem;
        }
    }    
`;

export const EntreEmContato = styled.section`
    width: calc(85% - 30px);
    height: auto;

    background-color: ${colorWhite};
    margin-top: 60px;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px ${backgroundBoxShadow};

    legend {
        margin-top: 0;
        font-size: 2em;
        font-weight: 700;
    }

    .form {
        background-color: ${colorWhite};
        border-radius: 8px;
        margin-top: 30px;
    }

    .form > button {
        padding: 12px 25px;
        text-transform: uppercase;
        font-weight: 500;
    }

    @media (max-width: 480px) {
        legend {
            margin-top: 0;
            font-size: 1.3em;
            font-weight: 700;
        }

        .form > button {
            font-size: 0.7rem;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        legend {
            margin-top: 0;
            font-size: 1.5em;
            font-weight: 700;
        }

        .form > button {
            font-size: 0.9rem;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        legend {
            margin-top: 0;
            font-size: 1.7em;
            font-weight: 700;
        }
    }
`;