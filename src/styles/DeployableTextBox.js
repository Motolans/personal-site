import styled, { keyframes } from 'styled-components';


const fade = keyframes`
    from{
        margin-top: -20px;
        opacity: 0;
    }

    to{
        margin-top: 0px;
        opacity: 1;
    }
`;


const DeployableTextBox = styled.div`
    display: flex;
    color: blue;
    margin: 100px auto;
    border: 2px solid black;
    width: 80%;
    animation: ${fade} 0.75s linear 1;
`;

export default DeployableTextBox;