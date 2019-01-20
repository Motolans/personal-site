import React from 'react';
import NavItem from '../components/NavItem'
import styled from 'styled-components';

const Bar = styled.nav`
    
        height: 56px;
        width: 100%; 
        position: fixed;
        background: radial-gradient( rgba(31, 57, 255, 1),rgba(120, 129, 196, 1));
        top: 0px;
        left: 0px;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        align-items: center;
        padding: 0px 20px;
        box-sizing: border-box;
        box-shadow: 0px 5px rgba(125, 125, 125, 0.3);
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        
        
`;


class NavBar extends React.Component{
    state={
        activeIndex: 0,
    }

    toggleActive = (index) =>{
        this.setState({activeIndex: index});
    }
    

    render(){
        let index = this.state.activeIndex
        let items = this.props.navItems.map((item, i) => <NavItem name={item} key={i} index={i} active={i === index} toggleActive={this.toggleActive}/>)
        return(
            
            <Bar>{items}</Bar>
            
        )
    }
} 

export default NavBar