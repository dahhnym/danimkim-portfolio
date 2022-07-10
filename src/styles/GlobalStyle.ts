import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        @media screen and (max-width: 640px) {
            font-size: 14px;
        }        
        font-size: 16px;
    }

    a, button, p, li {
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
