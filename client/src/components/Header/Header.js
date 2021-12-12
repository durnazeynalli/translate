import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';


import COLORS from '../../styles/colors'
import IMG from '../../asset';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    const [firstModalStatus, setFirstModalStatusStatus] = useState(false);

    const toggleFirstModal = () => setFirstModalStatusStatus(v => !v);


    return (
        <StyledNavbar collapseOnSelect expand="lg">
            <Container>           
                <Row>
                    <StyledLink to="/">translate<Span>me</Span></StyledLink>

                    {
                        isMobile 
                            ? 
                                <MobileMenuContainer>
                                    <NavLinkContainer>
                                        <Dropdown>
                                            <StyledNavLink to="/services">Services</StyledNavLink>
                                            <DropdownContent className="drop">
                                                <Column>
                                                    <DropdownLink to="/">Translation</DropdownLink>
                                                    <DropdownLink to="/">Website Localization</DropdownLink>
                                                    <DropdownLink to="/">App Localization</DropdownLink>
                                                    <DropdownLink to="/">Content Services</DropdownLink>
                                                </Column>
                                            </DropdownContent>
                                        </Dropdown>
                                        <StyledNavLink to="/">Industries</StyledNavLink>
                                        <StyledNavLink to="/">Companies</StyledNavLink>
                                        <StyledNavLink to="/">Pricing & Languages</StyledNavLink>
                                        <StyledNavLink to="/">Blog</StyledNavLink>
                                    </NavLinkContainer>
                                    <EndContainer>
                                        <EndLink to="/signup">Sign Up</EndLink>
                                        <LanguageContainer onClick={toggleFirstModal}>
                                            <Choice>
                                                <Flag src={IMG.eng} alt="flag" />
                                                <Language>English</Language>
                                                <ArrowIcon src={IMG.down} alt="icon"/>
                                            </Choice>
                                            {firstModalStatus && 
                                                <div>
                                                    <Choice>
                                                        <Flag src={IMG.az} alt="flag" />
                                                        <Language>Azerbaijani</Language>
                                                    </Choice>
                                                    <Choice>
                                                        <Flag src={IMG.ru} alt="flag" />
                                                        <Language>Russian</Language>
                                                    </Choice>
                                                </div>
                                            }
                                        </LanguageContainer>
                                    </EndContainer>
                                </MobileMenuContainer>
                            :
                                <MenuContainer onClick={() => setIsMobile(false)}>
                                    <NavLinkContainer>
                                        <Dropdown>
                                            <StyledNavLink to="/services">Services</StyledNavLink>
                                            <DropdownContent className="drop">
                                                <Column>
                                                    <DropdownLink to="/">Translation</DropdownLink>
                                                    <DropdownLink to="/">Website Localization</DropdownLink>
                                                    <DropdownLink to="/">App Localization</DropdownLink>
                                                    <DropdownLink to="/">Content Services</DropdownLink>
                                                </Column>
                                            </DropdownContent>
                                        </Dropdown>
                                        <StyledNavLink to="/">Industries</StyledNavLink>
                                        <StyledNavLink to="/">Companies</StyledNavLink>
                                        <StyledNavLink to="/">Pricing & Languages</StyledNavLink>
                                        <StyledNavLink to="/">Blog</StyledNavLink>
                                    </NavLinkContainer>
                                    <EndContainer>
                                        <EndLink to="/signup">Sign Up</EndLink>
                                        <LanguageContainer onClick={toggleFirstModal}>
                                            <Choice>
                                                <Flag src={IMG.eng} alt="flag" />
                                                <Language>English</Language>
                                                <ArrowIcon src={IMG.down} alt="icon"/>
                                            </Choice>
                                            {firstModalStatus && 
                                                <div>
                                                    <Choice>
                                                        <Flag src={IMG.az} alt="flag" />
                                                        <Language>Azerbaijani</Language>
                                                    </Choice>
                                                    <Choice>
                                                        <Flag src={IMG.ru} alt="flag" />
                                                        <Language>Russian</Language>
                                                    </Choice>
                                                </div>
                                            }
                                        </LanguageContainer>
                                    </EndContainer>
                                </MenuContainer>
                    }
                    
                    <Button onClick={() => setIsMobile(!isMobile)} src={isMobile ? IMG.close : IMG.menu} alt="menu"/>
                </Row>
            </Container>
        </StyledNavbar>
    )
}

const StyledNavbar = styled(Navbar)`
    background-color: ${COLORS.white};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Button = styled.img`
    display: none;

    @media screen and (max-width: 1200px) {
        display: block;
    }
`;

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-left: 4%;

    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

const MobileMenuContainer = styled.div`

    @media screen and (max-width: 1200px) {
        position: absolute;
        display: block;
        list-style: none;
        background-color: ${COLORS.white};
        left: 0;
        top: 45px;
        transition: all 0.5s ease-out;
        width: 100%;
        padding: 10px 0;
    }
`;

const StyledLink = styled(Link)` 
    color: ${COLORS.orange};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    
    :hover {
        color: ${COLORS.orange};
        text-decoration: none;
    }
`;

const Span = styled.span`
    font-weight: 900;
`;

const NavLinkContainer = styled.div`
    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
    }
`;

const StyledNavLink = styled(NavLink)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: ${COLORS.grey};
    text-decoration: none;
    margin: 0 15px;

    :hover {
        color: ${COLORS.grey};
        text-decoration: none;
    }

    @media screen and (max-width: 1200px) {
        margin: 5px auto;
    }
`;

const Dropdown = styled.div`
    position: relative;
    display: inline-block;

    :hover .drop {
        display: block;
    }
    @media screen and (max-width: 1200px) {
        margin: 5px auto;
    }
`;

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 190px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    border-bottom-right-radius: 20px;

`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const DropdownLink = styled(Link)`
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    color: ${COLORS.grey};
    margin: 5px 0;

    :hover {
        text-decoration: none;
        background-color: ${COLORS.orange};
        padding: 5px;
        color: ${COLORS.white};
    }
`;

const EndContainer = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
    }
`;

const EndLink = styled(Link)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 18px;
    text-align: right;
    text-transform: uppercase;
    color: ${COLORS.grey};
    text-decoration: none;
    margin-right: 10px;

    :hover {
        color: ${COLORS.grey};
        text-decoration: none; 
    }

    @media screen and (max-width: 1200px) {
        margin: 5px auto;
    }
`;

const LanguageContainer = styled.div`  
    border: 2px solid ${COLORS.orange};
    box-sizing: border-box;
    border-radius: 10px;
    padding: 0 10px;

    @media screen and (max-width: 1200px) {
        margin: 5px auto;
    }
`;

const Choice = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
`;

const ArrowIcon = styled.img`
    margin-left: 10px;
`;

const Flag = styled.img`
    margin-right: 5px;
    width: 25px;
`;

const Language = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: ${COLORS.orange};
    margin-top: 7px;
`;

export default Header;