import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-size: 10px;
        border: none;
        margin: 0;
        padding: 0;
        
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.family};
    }

    a, p {
        font-size: 1.4rem;
    }

    ol, ul {
        list-style: none;
    }

    button {
        border: none;
    }
`

export default GlobalStyles