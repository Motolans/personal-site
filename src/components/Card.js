import React from 'react';
import styled from 'styled-components/macro';


const CardContainer = styled.div`

    height: 260px;
    border: 1px solid black;
    border-radius: 2px;
    margin-top: 5px;
    padding: 5px;
    &:hover{
        border-color: rgba(255, 111, 44, 1);
        transform: scale(1.05, 1.05);
    }
`;

const TextStyle = styled.div`
    text-align: left;
    padding: 5px;


`;



const card = (props) =>{
    
    return(
        <CardContainer>
            <h2>{props.heading}</h2>
            <TextStyle>
                <p>{props.text}</p>
            </TextStyle>
        </CardContainer>
    )
}

export default card;