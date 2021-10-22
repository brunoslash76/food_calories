import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../../styles/theme.styles'

const modifier = (themeProperties, property) => {
    if (!themeProperties[property]) {
        throw new Error(`Not possible to find ${property}, please verify theming file.`)
    }

    return themeProperties[property]
}

const SubTitle = styled.h2`
    ${({ theme, color, fontWeigth }) => css`
        font-family: ${theme.fonts.family};
        font-size: ${theme.fonts.sizes.xxlarge};
        color: ${modifier(theme.colors, color)};
        font-weight: ${modifier(theme.fonts.weight, fontWeigth)}
    `}
`
SubTitle.propTypes = {
    color: PropTypes.oneOf(theme.colors.colorsSet),
    fontWeigth: PropTypes.oneOf(theme.fonts.weight.weightSet)
}

SubTitle.defaultProps = {
    color: 'primary',
    fontWeigth: 'regular'
}

export default SubTitle