import PropTypes from 'prop-types'

import { Title } from '../../components'
import { Wrapper, ContentWrapper, Content } from './styles'

const UnauthenticatedWrapper = ({ children, title }) => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Content>
                    <Title style={{ marginBottom: '60px' }}>{title}</Title>
                    {children}
                </Content>
            </ContentWrapper>
        </Wrapper>
    )
}

UnauthenticatedWrapper.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired
}

export default UnauthenticatedWrapper
