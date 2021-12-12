import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IMG from '../../asset';
import COLORS from '../../styles/colors';

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <StyledRow>
                    <DataContainer>
                        <TitleText>Ready to get Started?</TitleText>
                        <DescriptionText>Translate instantly using our order form</DescriptionText>
                        <StyledButton btn1 size="sm">Order Online</StyledButton>
                    </DataContainer>
                    <DataContainer>
                        <TitleText>Have a large project?</TitleText>
                        <DescriptionText>Speak to one of our account managers</DescriptionText>
                        <StyledButton size="sm">Contact Sales</StyledButton>
                        <StyledLink to="/"><ContactSpan>AZ: </ContactSpan>+994 50 123 45 67</StyledLink>
                        <StyledLink to="/"><ContactSpan>Canada: </ContactSpan>+​1 604 555 5555</StyledLink>
                    </DataContainer>
                </StyledRow>
                <StyledRow menu>
                    <FooterDataContainer logo>
                        <Logo>translate<Span>me</Span></Logo>
                        <FooterMenuLink to="/">Blog</FooterMenuLink>
                        <FooterMenuLink to="/">Translators</FooterMenuLink>
                        <SocialLinksContainer>
                            <SocialLink href="/social" target="_blank"><SocialLinkIcon src={IMG.linkedin} alt="social"/></SocialLink>
                            <SocialLink href="/social" target="_blank"><SocialLinkIcon src={IMG.facebook} alt="social"/></SocialLink>                            
                            <SocialLink href="/social" target="_blank"><SocialLinkIcon src={IMG.twitter} alt="social"/></SocialLink>                           
                            <SocialLink href="/social" target="_blank"><SocialLinkIcon src={IMG.instagram} alt="social"/></SocialLink>
                            <SocialLink href="/social" target="_blank"><SocialLinkIcon src={IMG.youtube} alt="social"/></SocialLink>                       
                         </SocialLinksContainer>
                         <CopyText>2021 © All rights reserved.</CopyText>
                    </FooterDataContainer>
                    <FooterDataContainer>
                        <MenuTitle>For customers</MenuTitle>
                        <FooterMenuLink to="/prof">Professional Translation</FooterMenuLink>
                        <FooterMenuLink to="/">Languages</FooterMenuLink>
                        <FooterMenuLink to="/">Pricing</FooterMenuLink>
                        <FooterMenuLink to="/">Industries</FooterMenuLink>
                        <FooterMenuLink to="/">Case Studies</FooterMenuLink>
                    </FooterDataContainer>
                    <FooterDataContainer>
                        <MenuTitle>Community</MenuTitle>
                        <FooterMenuLink to="/">Become a Translator</FooterMenuLink>
                        <FooterMenuLink to="/">Our Translation & Interpreting Courses</FooterMenuLink>
                        <FooterMenuLink to="/">Resources</FooterMenuLink>
                    </FooterDataContainer>
                    <FooterDataContainer>
                        <MenuTitle>Company</MenuTitle>
                        <FooterMenuLink to="/">About us</FooterMenuLink>
                        <FooterMenuLink to="/">Careers</FooterMenuLink>
                        <FooterMenuLink to="/xwsm,">FAQ</FooterMenuLink>
                    </FooterDataContainer>
                </StyledRow>
            </Container>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    background-color: ${COLORS.background};
    padding: 3% 0 2%;
`;

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: ${props => props.menu ? '0': '0 7%'};
    border-bottom: ${props => props.menu ? 'none' : '2px solid'};
    border-color: ${COLORS.white};
    padding-bottom: 2%;
`;

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 50%;
    padding: 1%;

    @media (max-width: 900px) {
        width: 100%;
        margin-top: 15px;
    }
`;

const TitleText = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
    color: ${COLORS.grey};
    margin: 5px auto;
    width: 80%;
`;

const DescriptionText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: ${COLORS.lightGrey};
    margin-top: 10px;
`;

const StyledButton = styled.button`
    margin: 0 10px;
    padding: 7px 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    width: 150px;
    border-radius: 10px;
    margin-bottom: 10px;

    background: ${props => props.btn1 ? COLORS.orange : COLORS.white};
    color: ${props => props.btn1 ? COLORS.white : COLORS.orange};
    border: 1px solid ${COLORS.orange};

    @media (max-width: 1200px) {
        margin-top: 15px;
    }
`;

const StyledLink = styled(Link)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 169.69%;
    text-align: center;
    color: ${COLORS.grey};
    margin: 5px auto;

    :hover {
        color: ${COLORS.grey};
    }
`;

const ContactSpan = styled.span`
    text-decoration: none;
`;

const FooterDataContainer = styled.div`
    width: 25%;
    padding: ${props => props.logo ? '2% 0' : '2% 3%'};
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        width: 50%;
        margin-top: 15px;
        padding: 2% 3%;
    }

    @media (max-width: 700px) {
        width: 100%;
        margin-top: 15px;
        padding: 2% 3%;
    }

`;

const Logo = styled.h1`
    color: ${COLORS.orange};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 35px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
`; 

const Span = styled.span`
    font-weight: 900;
`;

const SocialLinksContainer = styled.div`
    margin: 20px 0 0;
`;

const SocialLink = styled.a`
    text-decoration: none;
    margin-right: 15px;
`;

const SocialLinkIcon = styled.img`

`;

const CopyText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: ${COLORS.grey};
    margin: 10px 0;
`;

const MenuTitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-transform: uppercase;
    color: ${COLORS.lightGrey};
`;

const FooterMenuLink = styled(Link)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: ${COLORS.grey};
    text-decoration: none;
    margin: 5px 0;

    :hover {
        text-decoration: none;
        color: ${COLORS.grey};
    }
`;