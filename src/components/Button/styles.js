import styled from "styled-components";
import { Link } from "react-router-dom";
import { fontFamilyRoboto } from "../UI/Fonts";
import { backgroundDarkGreen, colorDarkGreen, colorHeroText } from "../UI/Colors";

export const ContentButton = styled.button `
    font-family: ${fontFamilyRoboto};

    background-color: ${function({ $corDeFundo }) {return $corDeFundo}};
    color: ${function({ $textColor }) {return $textColor}};
    padding: 15px 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${function({ $corDeFundoHover }) {return $corDeFundoHover}};
    }
`;

export const ButtonLink = styled(ContentButton).attrs({as: Link}) `
    background-color: ${backgroundDarkGreen};
    color: ${colorHeroText};
    text-decoration: none;

    &:hover {
        background-color: ${colorDarkGreen};
    }
`