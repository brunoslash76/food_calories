import styled, { css } from 'styled-components'

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

export {
    CloseButton,
    ModalCard,
    ModalFormContainer,
    ModalCardHeader,
    ModalCardBody,
    ModalCardFooter,
}
