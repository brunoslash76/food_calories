import { NavBar } from '../../components'
import { Wrapper, ContentArea } from './styles'

const PageWrapper = ({ children }) => {
    return (
        <>
            <NavBar title='Food Calories' />
            <Wrapper>
                <ContentArea>
                    {children}
                </ContentArea>
            </Wrapper>
        </>
    )
}

export default PageWrapper
