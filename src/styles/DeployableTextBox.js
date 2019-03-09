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
    display: grid;
    color: blue;
    margin: 100px auto;
    width: 80%;
    animation: ${fade} 0.75s linear 1;
    padding: 5px;
`;

export default DeployableTextBox;