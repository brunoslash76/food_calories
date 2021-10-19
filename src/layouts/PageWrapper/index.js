import { NavBar } from '../../components'
import { Wrapper, ContentArea } from './styles'

const PageWrapper = ({ child }) => {
    return (
        <>
            <NavBar title='Food Calories' />
            <Wrapper>
                <ContentArea>
                    {child}
                </ContentArea>
            </Wrapper>
        </>
    )
}

export default PageWrapper
