import styled, { css } from 'styled-components'

const Wrapper = styled.div`
    ${({ theme }) => css`
        min-height: calc(100vh - ${theme.navBarHeight});
        height: fit-content;
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
        min-height: calc(100vh - 80px);
        padding: 40px;
        padding-bottom: 56px;
    `}
`

export {
    Wrapper,
    ContentArea
}
