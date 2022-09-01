import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Badge } from 'react-bootstrap';
import image from './ShoppingBag.png';
import { Link } from 'react-router-dom';

const Container = styled.div
    `height: 75px;
     background-color: rgb(49, 170, 218);
    `

const Wrapper = styled.div
    `padding: 15px 20px;
     display: flex;
     justify-content: space-between;
    `

const Left = styled.div
    `flex: 1;
     display: flex;
     align-items: center;
    `

const Language = styled.span
    `font-size: 20px;
     cursor: pointer;
    `

const SearchContainer = styled.div
    `border: 0.5px solid rgb(160, 211, 231);
     display: flex;
     align-items: center;
     margin-left: 25px;
     background-color: white;
    `

const Input = styled.input  
    `border: none;
     margin-right: 5px;
     margin-left: 5px;
     font-size: 18px;
    `

const Center = styled.div
    `flex: 1;
     text-align: center;
    `

const Logo = styled.h1
    `font-weight: bold;
     display: flex;
     align-items: center;
     justify-content: center;
    `

const Image = styled.img
    `height: 5vh;
     width: 2.5vw;
     margin-right: 5px;
     object-fit: cover;
    `

const Right = styled.div
    `flex: 1;
     display: flex;
     align-items: center;
     justify-content: flex-end; 
    `

const MenuItem = styled.div
    `font-size: 20px;
     cursor: pointer;
     padding: 10px;
     display: flex;
     align-items: center;
     justify-content: center;
     &:hover
     {
        background-color: rgb(160, 211, 231);
        border-radius: 10px;
        text-decoration: underline;
     }
    `

const Button = styled.button
    `padding: 5px;
    `

const Navbar = () => 
{
  return (
    <Container>
        <Wrapper>
            <Left>
               <Language style = {{textDecoration: "underline"}}>EN</Language> 
               <SearchContainer>
                    <Input placeholder = "Search" />
                    <Button><FaSearch style = {{display: "flex", color: "rgb(49, 170, 218)", fontSize: 20}}/></Button>
               </SearchContainer>
            </Left>
            <Center><Logo><Link to = "/" style = {{textDecoration: "none", color: "black", display: "flex", alignItems: "center"}}><Image src = {image} /> Ray-Z Shopping</Link></Logo></Center>
            <Right>
                <Link to = "/" style = {{textDecoration: "none", color: "black", display: "flex", alignItems: "center"}}><MenuItem>HOME</MenuItem></Link>
                <Link to = "/users" style = {{textDecoration: "none", color: "black", display: "flex", alignItems: "center"}}><MenuItem>USERS</MenuItem></Link>
                <Link to = "/register" style = {{textDecoration: "none", color: "black", display: "flex", alignItems: "center"}}><MenuItem>REGISTER</MenuItem></Link>
                <Link to = "/signin" style = {{textDecoration: "none", color: "black", display: "flex", alignItems: "center"}}><MenuItem>SIGN-IN</MenuItem></Link>
                <Badge badge = {4} color = "warning">
                    <Link to = "/cart" style = {{color: "black", display: "flex", alignItems: "center"}}><MenuItem><AiOutlineShoppingCart size = {30} /></MenuItem></Link>
                </Badge>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar