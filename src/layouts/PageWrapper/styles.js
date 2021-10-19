import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background}
`

const ContentArea = styled.section`
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.white};
    height: 100vh;
    width: 100%;
    max-width: 800px;

`

export {
    Wrapper,
    ContentArea
}
