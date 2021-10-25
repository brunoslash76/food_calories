import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        * {
            box-sizing: border-box;
            font-size: 10px;
            border: none;
            margin: 0;
            padding: 0;
            font-family: ${theme.fonts.family};
        }

        h1, h2, h3, h4, h5, h6, p {
            margin: 0;
        }

        strong {
            font-size: ${theme.fonts.sizes.medium};
            font-weight: ${theme.fonts.weight.bold};
        }

        a, p {
            font-size: 1.4rem;
        }

        a{
            text-decoration: none;
        }

        ol, ul {
            list-style: none;
        }

        button {
            border: none;
        }
    `}
`

export default GlobalStyles