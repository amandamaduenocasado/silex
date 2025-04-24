import { createGlobalStyle } from 'styled-components';
import './normalize.css';
import { FONT_FAMILY } from './fonts';
import { COLORS } from './colors';

export const GlobalStyles = createGlobalStyle`

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body, html {
        font-family: ${FONT_FAMILY.manrope};
        margin: 0;
        padding: 0;
        height: 100%;
        color: ${COLORS.dark};
      
    }

    #root{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    h1, h2{
        font-family: ${FONT_FAMILY.manrope};
    }


    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    } 

    .cursor {
     display: none;

    @media screen and (min-width: 768px) {
    display: block;
    position: fixed;
    width: 35px; 
    height: 35px; 
    background-color: rgb(255, 230, 0); 
    border-radius: 50%; 
    border: 2px solid black;
    pointer-events: none; /* Elimina la capacidad de interacción del círculo */
    transform: translate(-50%, -50%); /* Centra el círculo en el cursor */
    z-index: 9999; 
    transition: transform 0.1s ease-out
	}
  }

  video {
    pointer-events: none;
  }

`;
