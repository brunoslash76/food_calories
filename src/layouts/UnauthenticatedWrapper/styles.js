import styled, { css } from 'styled-components'

const Wrapper = styled.div`
    ${({ theme }) => css`
        background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.primary} 47%, ${theme.colors.white} 4%, ${theme.colors.white} 100%);
        height: 100vh;
        padding: 24px;
        display: flex;
        justify-content: flex-end;
    `}
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;

`

const Content = styled.div`
    width: 100%;
    max-width: 400px;
`

export {
    Wrapper,
    ContentWrapper,
    Content
}
