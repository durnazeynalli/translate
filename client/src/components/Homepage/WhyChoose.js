import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {getHomeDB} from '../../actions/home';

import IMG from '../../asset';
import COLORS from '../../styles/colors';

const initialState = [
    {
        title: '',
        description: ''
    }
] 

const WhyChoose = ({getHomeDB, home: { home } }) => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        // if (!home) getHomeDB();

        if (home) {
            const profileData =  [{...initialState}] ;
            for (const key in home) {
              if (key in profileData) profileData[key] = home[key];
            }
            for (const key in home.whyChoose) {
                if (key in profileData) profileData[key] = home.whyChoose[key];
            }
                if (Array.isArray(profileData.whyChoose))
                profileData.whyChoose = profileData.whyChoose.forEach(element => {
                    console.log(element);
                });
                            
            setFormData(home.whyChoose);
          }
          
      }, [getHomeDB, home]); 

    const checkImage = (key) => {
        if(key === '0') {
            return <IconImg src={IMG.experience} alt="whyChoose"/>
        } else if(key === '1') {
            return <IconImg src={IMG.protection} alt="whyChoose"/>
        } else {
            return <IconImg src={IMG.platform} alt="whyChoose"/>
        }
    }

    return (
        <WhyContainer>
            <Container>
                <Title>Why choose global translations</Title>
                <StyledRow>
                        {formData ? Object.entries(formData)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => {
                                return  <ColContainer key={key}>
                                            {checkImage(key)}
                                            <TitleContainer>
                                                <TitleText>{value.title}</TitleText>
                                            </TitleContainer>
                                            <DescriptionText>{value.description}</DescriptionText>
                                        </ColContainer>
                            }) : null
                        }
                </StyledRow>
            </Container>
        </WhyContainer>
    )
}

WhyChoose.propTypes = {
    getHomeDB: PropTypes.func.isRequired,
    home: PropTypes.object.isRequired
};
  
const mapStateToProps = (state) => ({
   home: state.home
});
  
export default connect(mapStateToProps, { getHomeDB })(WhyChoose);

const WhyContainer = styled.div`
    background-color: ${COLORS.background};
    padding: 5% 0;
`;

const Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 169.69%;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${COLORS.grey};

    @media (max-width: 900px) {
        text-align: center;
    }
`;

const StyledRow = styled.div`
    display: flex;
    padding: 2% 7%;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const ColContainer = styled.div`
    width: 30%;
    margin: 0 3%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

const IconImg = styled.img`
    margin: 15px auto;
`;

const TitleContainer = styled.div`
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
`;

const TitleText = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    color: ${COLORS.grey};
    ${'' /* margin: ${props => props.margin ? '10px auto' : '22px auto'}; */}
`;

const DescriptionText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: ${COLORS.lightGrey};
    margin-top: 10px;
`;