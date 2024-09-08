import { createGlobalStyle } from 'styled-components';
import { fontFamilyRoboto } from '../Fonts';
import { backgroundLightBlue, colorDarkGreen } from '../Colors';

export const GlobalStyle = createGlobalStyle`
    body {
        border: none;
        padding: none;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        list-style: none;

        font-family: ${fontFamilyRoboto};
        color: ${colorDarkGreen};

        background-color: ${backgroundLightBlue};

        scroll-behavior: smooth;
    }
`;