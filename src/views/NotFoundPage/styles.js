import styled from "styled-components";
import { backgroundDarkerOrange, backgroundOrange, colorDarkGreen, colorHeroText } from "../../components/UI/Colors";

export const ContentNotFoundPage = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colorDarkGreen};
    text-align: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
        font-size: 4em;
        font-weight: 700;
        margin-bottom: 0px;
    }

    p {
        font-size: 1.5em;
        margin-bottom: 25px;
    }

    a {
        background-color: ${backgroundOrange};
        color: ${colorHeroText};
        padding: 15px 30px;
        font-size: 1.2em;
        font-weight: 500;
        transition: background-color 0.3s, transform 0.2s;
    }

    a:hover {
        background-color: ${backgroundDarkerOrange};
        transform: translateY(-3px);
    }
`;