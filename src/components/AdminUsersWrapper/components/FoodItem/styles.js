import styled from 'styled-components'

const Actions = styled.div`

`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    
    margin-bottom: 16px;
`

const Content = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    width: 80%;

`

export {
    Actions,
    Container,
    Content,
}
