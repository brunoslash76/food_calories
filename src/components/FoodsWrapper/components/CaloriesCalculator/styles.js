import styled, { css } from 'styled-components'

const CaloriesLimit = styled.p`
    ${({ theme, error }) => css`
        color: ${error ? theme.colors.danger : theme.colors.success}
    `}
`

export {
    CaloriesLimit
}
