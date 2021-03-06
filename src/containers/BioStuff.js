import React from 'react';
import DeployableTextBox from '../styles/DeployableTextBox';
import Card from '../components/Card'
import styled from 'styled-components';


const BioStyle = styled(DeployableTextBox)`
    display: grid;
    @media only screen and (min-width: 786px){
        width: 60%
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        justify-content: center;
    }

`;

const text = [
    ["Mostly just tinkering around with code at the moment, but more to come.", "Code"],
    ["This is my business body, it's strong and hard to sue.", "Game Design"],
    ["This is my business spirit, it's a capitalism, like Jesus.", "About"],
]



class BioStuff extends React.Component{
    render(){


        let cardSet = text.map((item, i) => <Card text={item[0]} heading={item[1]} key={i} index={i}/> )
    
        return(
            <BioStyle>
                {cardSet}
            </BioStyle>
        )
            
        
    }
}

export default BioStuff;