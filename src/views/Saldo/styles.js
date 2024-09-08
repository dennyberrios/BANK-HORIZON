import styled from "styled-components";
import { backgroundBoxShadow, backgroundDarkerOrange, backgroundOrange, colorHeroText, shadowAfterColor, shadowBeforeColor } from "../../components/UI/Colors";

export const ContentSaldo = styled.section `
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

    
    p {
        font-size: 1.5em;
        margin: 0;
        font-weight: 400;
        margin-bottom: 15px;
    }

    .saldo {
        font-size: 3em;
        font-weight: 700;
        margin: 0;
    }

    @media (max-width: 480px) {
        max-width: 200px;
        p {
            font-size: 1.1em;
        }
        .saldo {
            font-size: 2.3em;
            font-weight: 500;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        max-width: 350px;
        p {
            font-size: 1.2em;
        }
        .saldo {
            font-size: 2.6em;
            font-weight: 600;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 350px;
        p {
            font-size: 1.3em;
        }
        .saldo {
            font-size: 2.7em;
            font-weight: 600;
        }
    }
`;

export const Action = styled.section `
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    
    a {
        width: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: background-color 0.3s, transform 0.2s;
    }

    a:hover {
        transform: translateY(-3px);
    }

    a > img {
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        width: 260px;
        gap: 20px;

        a {
            width: 70px;
            font-size: 0.7rem;
        }

        a > img {
            width: 20px;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        width: 460px;
        gap: 20px;

        a {
            width: 90px;
            font-size: 0.9rem;
        }

        a > img {
            width: 23px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 740px;
        gap: 20px;

        a {
            width: 120px;
        }
    }

    @media (min-width: 1025px) and (max-width: 1200px) {
        width: 780px;
        gap: 20px;
    }

    @media (min-width: 1201px) {
        width: 780px;
        gap: 20px;
    }
`;