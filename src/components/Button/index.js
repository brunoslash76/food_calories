import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from '../../styles/theme.styles'

const modifiers = {
    primary: () => css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        transition: all .3s;
        &:hover {
            background-color: ${theme.colors.primaryDarker};
        }
    `,
    danger: () => css`
        background-color: ${theme.colors.danger};
        color: ${theme.colors.white};
        &:hover {
            background-color: ${theme.colors.dangerDarker};
        }
    `,
    withRightSpacing: () => css`
        margin-right: 8px;
    `,
    withLeftSpacing: () => css`
        margin-left: 8px;
    `
}

const Button = styled.button`
    ${({ theme, color, withRightSpacing, withLeftSpacing }) => css`
        height: 30px;
        width: 100px;
        border-radius: 4px;
        font-size: ${theme.fonts.sizes.medium};
        cursor: pointer;
        ${!!color && modifiers[color]()}
        ${withRightSpacing && modifiers['withRightSpacing']()}
        ${withLeftSpacing && modifiers['withLeftSpacing']()}
    `}
`

Button.propTypes = {
    color: PropTypes.oneOf(theme.colors.colorsSet),
    withRightSpacing: PropTypes.bool,
    withLeftSpacing: PropTypes.bool
}

Button.defaultProps = {
    color: theme.colors.colorsSet.primary,
    withRightSpacing: false,
    withLeftSpacing: false
}

export default Button
