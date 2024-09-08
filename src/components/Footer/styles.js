import styled from 'styled-components';
import { backgroundBoxShadow, colorDarkGreen, colorHeroText } from '../UI/Colors';

export const ContentFooter = styled.footer `
    background-color: ${colorDarkGreen};
    color: ${colorHeroText};
    text-align: center;
    padding: 15px;
    box-shadow: 0 -4px 8px ${backgroundBoxShadow};
`;