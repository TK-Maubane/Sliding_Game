import styled from 'styled-components'

export const Nav = styled.nav`
    background-color: rgba(0, 0, 0, 0.98);
    height: 80px;
    //margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled.a`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`
export const StyledLink = styled.a`
    padding: 0rem 2rem;
    color: whitesmoke;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 760px){
        display: none;
 }

`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:760px){
        color: 'white';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    color: black;

    @media screen and (max-width: 760px){
        display: none;
 }
`
export const NavItem = styled.li`
    height: 80px;
`

export const NavLink = styled.a`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer; 

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`