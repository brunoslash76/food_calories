import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
`

const ListItem = styled.li`
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    & > span {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    }
    
`

export {
    Container,
    ListItem
}