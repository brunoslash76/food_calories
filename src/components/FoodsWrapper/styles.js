import styled, { css } from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    height: fit-content;
    width: 100%;
`

const AddEntryButton = styled.button`
    ${({ theme }) => css`
        position: fixed;
        bottom: 24px;
        right: 32px;
        height: 65px;
        width: 65px;
        background-color: ${theme.colors.warning};
        border-radius: 50%;
        box-shadow: 0 4px 4px 0 ${theme.colors.grey};
        color: ${theme.colors.white};
        font-family: ${theme.fonts.family};
        font-size: 4.8rem;
        font-weight: ${theme.fonts.weight.thin};
        cursor: pointer;
        transition: all .3s;
        &:hover {
            box-shadow: none;
            background-color: ${theme.colors.warningDarker};
        }
    `}
`

export {
    AddEntryButton,
    Wrapper
}
