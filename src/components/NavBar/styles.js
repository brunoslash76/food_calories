import styled, { css } from 'styled-components'

const NavContainer = styled.nav`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: ${theme.navBarHeight};
        padding: 16px 24px;
        background-color: ${theme.colors.primary};
    `}
`

export {
    NavContainer
}
