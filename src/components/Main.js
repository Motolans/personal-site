import  { Switch, Route } from 'react-router-dom';
import React from 'react';
import BioStuff from '../containers/BioStuff';
import ProjectStuff from '../containers/ProjectStuff';
import About from './About';
import Error from './Error';
import styled from 'styled-components';

const MainStyle = styled.main`
    margin-top: 100px
`;

const Main = () =>(
    <MainStyle>
        <main>
            <Switch>
                <Route path="/" component={BioStuff} exact/>
                <Route path='/Projects' component={ProjectStuff}/>
                <Route path='/About' component={About}/>
                <Route component={Error}/>
            </Switch>
        </main>
    </MainStyle>
)

export default Main;