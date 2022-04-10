import React from 'react'
import Link from "next/link";
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarWrapper} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon/>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <Link href="/About">
                        <SidebarLink onClick={toggle}>About</SidebarLink>
                    </Link>
                    <Link href="/Friends">
                        <SidebarLink onClick={toggle} >F&F</SidebarLink>
                    </Link>
                    <Link href="/Contact">
                        <SidebarLink onClick={toggle}> Contact</SidebarLink>
                    </Link>
                    <Link href="/Gallery">
                        <SidebarLink onClick={toggle} >Gallery</SidebarLink>
                    </Link>
                </SidebarMenu>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
