import styled, { css } from 'styled-components'

const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: 8px;
`

const Span = styled.span`
    ${({ theme, small }) => css`
        font-size: ${small ? theme.fonts.sizes.xxsmall : theme.fonts.sizes.small};
        font-weight: ${theme.fonts.weight.light};
    `}
`

const DateText = styled.h4`
    ${({ theme }) => css`
        color: ${theme.colors.secundary};
        font-size: ${theme.fonts.sizes.xlarge};
        text-align: right;
    `}
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`

export {
    DateText,
    Header,
    ListItem,
    Span
}
