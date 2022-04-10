import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap,  FooterLinksContainer, FooterLinkItems, FooterLink, FooterLinksWrapper, FooterLinksTitle,
        SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinksTitle> About the Boy...</FooterLinksTitle>
                                <FooterLink> Barks </FooterLink>
                                <FooterLink> Grooming </FooterLink>
                                <FooterLink> Walks </FooterLink>
                                <FooterLink> Play-Time </FooterLink>
                                <FooterLink> Testimonials </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinksTitle> It iz what it iz...</FooterLinksTitle>
                                <FooterLink> Barks </FooterLink>
                                <FooterLink> Grooming </FooterLink>
                                <FooterLink> Walks </FooterLink>
                                <FooterLink> Play-Time </FooterLink>
                                <FooterLink> Testimonials </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinksTitle> About the Boy...</FooterLinksTitle>
                                <FooterLink> Barks </FooterLink>
                                <FooterLink> Grooming </FooterLink>
                                <FooterLink> Walks </FooterLink>
                                <FooterLink> Play-Time </FooterLink>
                                <FooterLink> Testimonials </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinksTitle> It iz what it iz...</FooterLinksTitle>
                                <FooterLink> Barks </FooterLink>
                                <FooterLink> Grooming </FooterLink>
                                <FooterLink> Walks </FooterLink>
                                <FooterLink> Play-Time </FooterLink>
                                <FooterLink> Testimonials </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo href='/'> Picasso </SocialLogo>
                        <WebsiteRights>Picasso ©  {new Date().getFullYear()} All Rights Reserved </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
               
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>      
        </FooterContainer>
    )
}

export default Footer
