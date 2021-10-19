import styled, { css } from 'styled-components'

const sizeModifier = (size) => {
    console.log(size)
    const sizes = { normal: 40, large: 48, small: 32 }
    if (!sizes[size]) {
        throw new Error(`Size ${size} is not specified, please choose small, normal or large`)
    }
    return `${sizes[size]}px`
}

const Wrapper = styled.div`
    ${({ theme, size }) => {
        const translatedSize = sizeModifier(size)
        return css`
            height: ${translatedSize};
            width: ${translatedSize};
            background-color: ${theme.colors.grey};
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        `}
    }
`

export {
    Wrapper
}
