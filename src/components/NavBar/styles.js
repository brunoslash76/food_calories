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

const Title = styled.h1`
    ${({ theme }) => css`
        font-family: ${theme.fonts.family};
        font-size: ${theme.fonts.sizes.xxlarge};
        color: ${theme.colors.white}
    `}
`

export {
    NavContainer,
    Title
}
