import styled, { css } from 'styled-components'

const Wrapper = styled.div`
    ${({ theme }) => css`
        height: calc(100vh - ${theme.navBarHeight});
        width: 100%;
        background-color: ${theme.colors.background};
    `}
`

const ContentArea = styled.section`
    ${({ theme }) => css` 
        margin: 0 auto;
        background-color: ${theme.colors.white};
        width: 100%;
        max-width: 800px;
        height: calc(100vh - ${theme.navBarHeight});
        padding: 16px;
    `}
`

export {
    Wrapper,
    ContentArea
}
