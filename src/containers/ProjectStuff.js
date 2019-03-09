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
    ["I've been learning React. Pretty cool, huh?", "React"],

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