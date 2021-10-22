import styled, { css } from 'styled-components'

const Text = styled.p`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.xlarge};
        color: ${theme.colors.primary};
        font-weight: ${theme.fonts.weight.medium};
    `}
`

export default Text
