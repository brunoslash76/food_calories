import styled from "styled-components";
import { Link as Anchor } from 'react-router-dom';

const AddEntryButton = styled.button`
    cursor: pointer;
    font-size: ${({ theme }) => theme.fonts.sizes.xxlarge};
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.primaryDark};
    transition: all .3s;
    &:hover {
        background-color: #aaa;
        color: ${({ theme }) => theme.colors.white}
    }
`

const Body = styled.section`

`
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    width: 80%;
`

const UserContainer = styled.div`
    display: flex;
    align-items: flex-end;
`

const ListItem = styled.li`
    margin-bottom: 40px;
`

const Link = styled(Anchor)`
    &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.primary}
    }
`

export {
    AddEntryButton,
    Body,
    Header,
    UserContainer,
    ListItem,
    Link
}
