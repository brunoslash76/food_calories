import { Wrapper, ContentArea } from './styles'

const PageWrapper = ({ child }) => {
    return (
        <Wrapper>
            <ContentArea>
                {child}
            </ContentArea>
        </Wrapper>
    )
}

export default PageWrapper
