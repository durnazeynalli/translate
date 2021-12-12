import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {getHomeDB} from '../../actions/home';

import { Row, Col, Container } from 'react-bootstrap';
import COLORS from '../../styles/colors'
import IMG from '../../asset/index'
import { Link } from 'react-router-dom';

import {base64Img} from '../../asset/base64Img';

const initialState = {
    title: '',
    text1: '',
    text2: '',
    text3: '',
    text: '',
    buttonText1: '',
    buttonText2: '',
    photo: ''
} 


const Banner = ({getHomeDB, home: { home } }) => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (!home) getHomeDB();

        if (home) {
            const profileData = { ...initialState };
            for (const key in home) {
              if (key in profileData) profileData[key] = home[key];
            }
            for (const key in home.banner) {
              if (key in profileData) profileData[key] = home.banner[key];
            }
            for (const key in home.bannerHolder) {
                if (key in profileData) profileData[key] = home.bannerHolder[key];
              }
            setFormData(profileData);
          }
      }, [getHomeDB, home]);      

    return (
        <StyledContainer>  
            <Container>         
                <Row>
                    <Col lg={6} md={6} xs={12}>
                        <Title>
                            {formData.title}
                        </Title> 
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <Image photo={formData.photo} />
                    </Col>
                </Row>

                <TextContainer>
                    <HolderRow>
                        <DataContainer>
                            <Icon src={IMG.heart} alt="heart" />
                            <InfoContainer>
                                <Percent>93.5%</Percent>
                                <PercentText>customer satisfaction</PercentText>
                            </InfoContainer>
                        </DataContainer>
                        <DataContainer>
                            <Icon src={IMG.star} alt="heart" />
                            <InfoContainer>
                                <Percent>25 000 +</Percent>
                                <PercentText>customers</PercentText>
                            </InfoContainer>
                        </DataContainer>
                        <DataContainer>
                            <Icon src={IMG.diamond} alt="heart" />
                            <InfoContainer>
                                <Percent>1 billion</Percent>
                                <PercentText>words translated</PercentText>
                            </InfoContainer>
                        </DataContainer>
                    </HolderRow>
                </TextContainer>

                <BannerHolderContainer>
                    <Container>                 
                        <StyledRow>
                            <StyledRow>
                                <TranslaterImg src={IMG.girl} alt="translator"/>                    
                                <TranslaterImg img2 src={IMG.boy} alt="translator"/>
                            </StyledRow>
                            <Info>
                                {formData.text}
                            </Info>
                            <StyledRow>
                                <StyledButton btn1 size="sm">{formData.buttonText1}</StyledButton>
                                <StyledButton size="sm">{formData.buttonText2}</StyledButton>
                            </StyledRow>
                    </StyledRow>
                    </Container>
                </BannerHolderContainer>

                <SponsorContainer>
                    <StyledRow>
                        <IconContainer>
                            <SponsorIcon src={IMG.cococola} alt="sponsor" />
                        </IconContainer>
                        <IconContainer>                            
                            <SponsorIcon src={IMG.socar} alt="sponsor" />
                        </IconContainer>
                        <IconContainer>                            
                            <SponsorIcon src={IMG.toyota} alt="sponsor" />
                        </IconContainer>
                        <IconContainer>                            
                            <SponsorIcon src={IMG.bp} alt="sponsor" />
                        </IconContainer>
                        <IconContainer>                            
                            <SponsorIcon src={IMG.amazon} alt="sponsor" />
                        </IconContainer>
                        <IconContainer>                            
                            <SponsorIcon src={IMG.danone} alt="sponsor" />
                        </IconContainer>
                        <IconContainer>
                            <SponsorIcon src={IMG.halliburton} alt="sponsor" />
                        </IconContainer>
                        <IconContainer>
                            <SponsorIcon src={IMG.booking} alt="sponsor" />
                        </IconContainer>
                        <IconContainer>
                            <SponsorIcon src={IMG.redbull} alt="sponsor" />
                        </IconContainer>
                        <IconContainer>
                            <StyledLink to="/more">
                                <More>More </More>
                                <SponsorIcon src={IMG.moreArrow} alt="sponsor" />
                            </StyledLink>
                        </IconContainer>                        
                    </StyledRow>
                </SponsorContainer>
            </Container> 
        </StyledContainer>
    )
}

Banner.propTypes = {
    getHomeDB: PropTypes.func.isRequired,
    home: PropTypes.object.isRequired
};
  
const mapStateToProps = (state) => ({
   home: state.home
});
  
export default connect(mapStateToProps, { getHomeDB })(Banner);


const StyledContainer = styled.div`
    background-color: ${COLORS.background};
    padding: 5% 0;
`;

const Title = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 53px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${COLORS.grey};

    @media screen and (max-width: 1200px) {
        text-align: right;
        font-size: 30px;
        margin-bottom: 15px;
    }
`;

const Image = styled(base64Img)`
    width: 100%;
`;

const TextContainer = styled.div`
    padding: 8% 2% 2%;
`;

const HolderRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const DataContainer = styled.div`
    display: flex;
    align-items: center;
    ${'' /* justify-content: center; */}
    width: 30%;
    margin: 0 1%;

    @media (max-width: 1000px) {
        width: 50%;
        margin: 15px 0;
    }

    @media (max-width: 770px) {
        width: 100%;
        margin: 15px auto;
        padding-left: 30px;
    }
`;

const InfoContainer = styled.div`
    margin-left: 10px;
`;

const Icon = styled.img`
    width: 20%;

    @media (max-width: 770px) {
        width: 50px;
    }
`;

const Percent = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.12em;
    color: ${COLORS.orange};
`;

const PercentText = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${COLORS.grey};
`;

const BannerHolderContainer = styled.div`
    margin: 5% 7%;
    padding: 3%;
    background-color: ${COLORS.white};
    box-shadow: 0px 10px 20px rgba(114, 114, 114, 0.2);
    border-radius: 20px;
`;

const StyledRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const TranslaterImg = styled.img`
    border-radius: 50%;
    margin-left: ${props => props.img2 ? "-20px" : "0"};
`;

const Info = styled.p`
    margin: 0 10px;
    text-align: center;
    width: 40%;
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

    background: ${props => props.btn1 ? COLORS.orange : COLORS.white};
    color: ${props => props.btn1 ? COLORS.white : COLORS.orange};
    border: 1px solid ${COLORS.orange};

    @media (max-width: 1200px) {
        margin-top: 25px;
    }

    @media (max-width: 800px) {
        margin-top: 15px;
    }
`;

const SponsorContainer = styled.div`
    padding: 0 12%;
`;

const IconContainer = styled.div`
    width: 20%;
    margin: 3% 0;
    text-align: center;

    @media (max-width: 1000px) {
        width: 31%;
    }

    @media (max-width: 750px) {
        width: 48%;
    }
`;

const SponsorIcon = styled.img`
    ${'' /* margin: 20px 15px;
    width: 15%;
    height: 20px; */}
    margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;

    :hover {
        text-decoration: none;
    }
`;

const More = styled.h6`
    color: ${COLORS.orange};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 150%;
    margin-right: 5px;
`;