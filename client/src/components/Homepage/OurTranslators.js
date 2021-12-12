import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import {getHomeDB} from '../../actions/home';
import styled from 'styled-components';
import IMG from '../../asset';
import COLORS from '../../styles/colors';

const initialState = [
    {
        fullName: '',
        description: ''
    }
] 

const OurTranslators = ({getHomeDB, home: { home } }) => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        // if (!home) getHomeDB();

        if (home) {
            const profileData =  [{...initialState}] ;
            for (const key in home) {
              if (key in profileData) profileData[key] = home[key];
            }
            for (const key in home.ourTranslators) {
                if (key in profileData) profileData[key] = home.ourTranslators[key];
            }
                if (Array.isArray(profileData.ourTranslators))
                profileData.ourTranslators = profileData.ourTranslators.forEach(element => {
                    console.log(element);
                });
                            
            setFormData(home.ourTranslators);
          }
          
      }, [getHomeDB, home]); 

    return (
        <TranslatorsContainer>
            <Container>
                <Title>
                    Our translators
                </Title>
                <StyledRow>
                        {formData ? Object.entries(formData)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => {
                                return  <DataContainer key={key}>
                                            <TranslatorImg src={IMG.boy} alt="translators"/>
                                            <TitleText>{value.fullName}</TitleText>
                                            <DescriptionText>English/German Translator</DescriptionText>
                                        </DataContainer>
                            }) : null
                        }
                </StyledRow>
            </Container>
        </TranslatorsContainer>
    )
}

OurTranslators.propTypes = {
    getHomeDB: PropTypes.func.isRequired,
    home: PropTypes.object.isRequired
};
  
const mapStateToProps = (state) => ({
   home: state.home
});
  
export default connect(mapStateToProps, { getHomeDB })(OurTranslators);

const TranslatorsContainer = styled.div`
    background-color: ${COLORS.white};
    padding: 5% 0 2%;
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
    flex-wrap: wrap;
    padding: 2% 7%;
`;

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 23%;
    margin: 0 1%;

    @media (max-width: 1000px) {
        width: 31%;
    }

    @media (max-width: 700px) {
        width: 48%;
    }
`;

const TranslatorImg = styled.img`
    border-radius: 50%;
    padding: 2%;
    margin: 15px;
    text-align: center;
    width: 30%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 150%;
    color: ${COLORS.grey};
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