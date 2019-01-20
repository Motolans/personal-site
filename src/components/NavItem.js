import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const StyledNavLink = styled(NavLink)`
    margin: 5px;
    color: ${props => props.selected ? 'rgba(255, 111, 44, 1)' : 'white'};
    text-decoration: none;
    &:hover{
        color: rgba(255, 111, 44, 1);
    }


`;


class navItem extends React.Component {
    
    render(){
        
        let link;
        if (this.props.name === "Home"){
            link = '/';
        } else {
            link = '/' + this.props.name;
        }
        return(
            <StyledNavLink to={link} onClick={()=> this.props.toggleActive(this.props.index)} selected={this.props.active}>{this.props.name}</StyledNavLink>
        )
    }
    
}



export default navItem;