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

const CloseButton = styled.button`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.sizes.xlarge};
        font-weight: ${theme.fonts.weight.light};
        border-radius: 50%;
        height: 30px;
        width: 30px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
            background-color: rgba(180, 180, 180, 0.5);
        }
    `}
`

const FoodEntryContainer = styled.div`
    display: flex;
`

const ModalCard = styled.div`
    ${({ theme }) => css`
        height: 290px;
        width: 480px;
        padding: 16px;
        background-color: ${theme.colors.white};
        border-radius: 4px;
    `}
`
const ModalFormContainer = styled.form`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
`

const ModalCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ModalCardBody = styled.div`
    padding: 16px 0;
`
const ModalCardFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`

export {
    AddEntryButton,
    CloseButton,
    FoodEntryContainer,
    ModalCard,
    ModalCardHeader,
    ModalCardBody,
    ModalCardFooter,
    ModalFormContainer,
    Wrapper
}
