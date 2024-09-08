import styled from "styled-components";
import { backgroundOrange, colorHeroText } from "../UI/Colors";
import { fontFamilyRoboto } from "../UI/Fonts";

export const ContentLogo = styled.div `
    padding: 0 10px;
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${fontFamilyRoboto};
    font-weight: 900;
    font-size: 1.3rem;

    img {
        width: 50px;
    }

    p {
        margin: 0;
        margin-left: 5px;
        color: ${colorHeroText};
        font-size: 1.7rem;
    }

    p > span {
        color: ${backgroundOrange};
    }

    @media (max-width: 480px) {
        width: 195px;
        font-weight: 700;

        img {
            width: 35px;
        }

        p {
            margin-left: 5px;
            font-size: 1.3rem;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        width: 220px;
        font-weight: 700;

        img {
            width: 40px;
        }

        p {
            margin-left: 5px;
            font-size: 1.5rem;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 220px;
        font-weight: 700;

        img {
            width: 40px;
        }

        p {
            margin-left: 5px;
            font-size: 1.5rem;
        }
    }

    @media (min-width: 1025px) and (max-width: 1200px) {
        width: 270px;
    }

    @media (min-width: 1201px) {
        width: 270px;
    }
`;