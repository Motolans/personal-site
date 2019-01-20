import React from 'react';
import styled from 'styled-components';

const BioStyle = styled.div`
    display: flex;
    color: blue;
    margin: 100px auto;
    border: 2px solid black;
    width: 80%;
    background-color: rgba(31, 57, 255, 0.2);
    padding: 5px;
`;


class BioStuff extends React.Component{
    render(){
        console.log(this.props.name);
        /*
        return(
            <div style={styles}>{this.props.name}</div>
        )
        */
        return(
            <BioStyle>
                <p>
                    This is my business. It does business things. 
                </p>
            </BioStyle>
        )
            
        
    }
}

export default BioStuff;