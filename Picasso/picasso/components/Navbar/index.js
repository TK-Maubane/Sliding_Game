import React from "react";
import { FaDog } from "react-icons/fa";
import Link from "next/link";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  StyledLink,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarElements";

const Dogstyle = { color: "green", width: "2em", height: "2em" };

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          
          <Link href="/">
            <NavLogo>Picasso</NavLogo>
          </Link>

          <MobileIcon onClick={toggle}>
            <FaDog style={Dogstyle} />
          </MobileIcon>
          <NavMenu> 
            <Link href="/About">
              <StyledLink>About</StyledLink>
            </Link>
            
            <Link href="/Gallery">
              <StyledLink>Gallery</StyledLink>
            </Link>

            
            
            <Link href="/Contact">
              <StyledLink>Contact</StyledLink>
            </Link>
          </NavMenu>
        
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
