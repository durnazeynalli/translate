import React from 'react';
import styled from 'styled-components';

export const base64Img = ({ photo }) => {
    return (
        <Image src={`data:image/jpeg;base64,${photo}`} alt="base64" />
    )
}

const Image = styled.img`
    width: 100%;
`;
