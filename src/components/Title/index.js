import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const colorModifier = (colors, color) => {
    if (!colors[color]) {
        throw new Error(`Not possible to find ${color}, please verify theming file.`)
    }

    return colors[color]
}

const Title = styled.h1`
    ${({ theme, color }) => css`
        font-family: ${theme.fonts.family};
        font-size: ${theme.fonts.sizes.xxlarge};
        color: ${colorModifier(theme.colors, color)}
    `}
`
Title.propTypes = {
    color: PropTypes.string
}

Title.defaultProps = {
    color: 'primary'
}

export default Title