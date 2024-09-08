import styled from "styled-components";
import { backgroundBoxShadow, backgroundDarkGreen, colorLighterYellow, colorYellow } from "../UI/Colors";
import { fontFamilyRoboto } from "../UI/Fonts";

export const ContentHeader = styled.header`
    width: 100%;
    height: auto;
    background-color: ${backgroundDarkGreen};

    font-family: ${fontFamilyRoboto};

    display: flex;
    flex-direction: column;

    box-shadow: 0 4px 8px ${backgroundBoxShadow};

    nav {
        padding: 0 10px;
    }

    .nav > ul{
        display: flex;
        list-style: none;
        padding: 0;
    }

    .nav > ul > li {
        margin: 10px;
    }

    .nav > ul > li > a {
        text-decoration: none;
        color: ${colorYellow};
        font-size: 0.95rem;
        font-weight: 400;
        padding: 5px;
        transition: all 0.3s;
    }

    .nav > ul > li > a:hover {
        color: ${colorLighterYellow};
    }

    .nav > ul > li > a:focus {
        border-radius: 2px 12px 2px 12px;
        border-top: 2px solid ${colorLighterYellow};
        border-bottom: 2px solid ${colorLighterYellow};
    }

    @media (max-width: 400px) {
        .nav > ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;