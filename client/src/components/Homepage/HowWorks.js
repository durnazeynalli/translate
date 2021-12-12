import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {getHomeDB} from '../../actions/home';

import { Container } from 'react-bootstrap';
import COLORS from '../../styles/colors';
import IMG from '../../asset';

const initialState = [
    {
        title: '',
        description: ''
    }
] 

const HowWorks = ({getHomeDB, home: { home } }) => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        // if (!home) getHomeDB();

        if (home) {
            const profileData =  [{...initialState}] ;
            for (const key in home) {
              if (key in profileData) profileData[key] = home[key];
            }
            for (const key in home.howWorks) {
                if (key in profileData) profileData[key] = home.howWorks[key];
            }
                if (Array.isArray(profileData.howWorks))
                profileData.howWorks = profileData.howWorks.forEach(element => {
                    console.log(element);
                });
                            
            setFormData(home.howWorks);
          }
          
      }, [getHomeDB, home]); 

        const checkCircle = (key) => {
            if(key === '0') {
                return <Circle>1</Circle>
            } else if(key === '1') {
                return <Circle>2</Circle>
            } else {
                return <Circle>3</Circle>
            }
        }

    return (
        <HowWorksContainer>
            <Container>
                <Title>How global translation works</Title>
                <StyledRow>
                    {formData ? Object.entries(formData)
                        .filter(([_, value]) => value)
                        .map(([key, value]) => {
                            return  <ArrowCont key={key}>
                                        <DataContainer>                                            
                                            {checkCircle(key)}
                                            <TitleContainer>
                                                <TitleText>{value.title}</TitleText>
                                            </TitleContainer>                                    
                                            <DescriptionText>{value.description}</DescriptionText>
                                        </DataContainer>
                                        <ArrowIcon style = {{display: key === '2' ? 'none' : 'block'}} src={IMG.howIcon} alt="arrow"/>
                                    </ArrowCont>                                    
                        }) : null
                    }
                </StyledRow>
            </Container>
        </HowWorksContainer>
    )
}
   
HowWorks.propTypes = {
    getHomeDB: PropTypes.func.isRequired,
    home: PropTypes.object.isRequired
};
  
const mapStateToProps = (state) => ({
   home: state.home
});
  
export default connect(mapStateToProps, { getHomeDB })(HowWorks);

const HowWorksContainer = styled.div`
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

    @media (max-width: 100px) {
        text-align: center;
    }
`;

const StyledRow = styled.div`
    display: flex;
    padding: 2% 7%;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ArrowCont = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    margin: 0 3%;

    @media (max-width: 1000px) {
        width: 100%;
        margin: 15px 0;
    }
`;

const Circle = styled.div`
    border: 1px solid ${COLORS.circleGrey};
    background-color: ${COLORS.circleGrey};
    border-radius: 50%;
    margin: 15px;
    width: 45px;
    height: 45px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 150%;
    color: ${COLORS.grey};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TitleContainer = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    @media (max-width: 1000px) {
        height: 40px;
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

const ArrowIcon = styled.img`
    width: 25px;
    height: 20px;
    margin-top: 20px;

    @media (max-width: 1000px) {
        transform: rotate(90deg);
        margin-bottom: 10px;
    }
`;