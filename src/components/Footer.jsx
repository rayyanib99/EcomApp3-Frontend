import styled from 'styled-components';
import image from './ShoppingBag.png';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Container = styled.div
    `display: flex;
    `

const Left = styled.div
    `flex: 1;
     display: flex;
     flex-direction: column;
     padding: 20px;
    `

const Logo = styled.h1
    `display: flex;
     align-items: center;
    `

const Image = styled.img
    `height: 4vh;
     width: 2vw;
     margin-right: 5px;
    `

const Description = styled.p
    `margin: 20px 0px;`

const SocialContainer = styled.div
    `display: flex;`

const SocialIcon = styled.div
    `width: 40px;
     height: 40px;
     border-radius: 50%;
     background-color: #${props => props.color};
     color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-right: 20px;
    `

const Center = styled.div
    `flex: 1;
     padding: 20px;
    `

const Title = styled.h3
    `margin-bottom: 30px;
    `

const List = styled.ul
    `margin: 0;
     padding: 0;
     list-style: none;
     display: flex;
     flex-wrap: wrap;
    `

const ListItem = styled.li
    `width: 50%;
     margin-bottom: 10px;
     &:hover
     {
        text-decoration: underline;
     }
    `

const Right = styled.div
    `flex: 1;
     padding: 20px;
    `

const ContactItem = styled.div
    `margin-bottom: 20px;
     display: flex;
     align-items: center;
    `

const Payment = styled.img
    `width: 50%;`

const Footer = () => 
{
  return (
    <Container>
        <Left>
            <Logo><Image src = {image} /> Ray-Z Shopping</Logo>
            <Description>
                Check us out on:
            </Description>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <BsFacebook />
                </SocialIcon>
                <SocialIcon color = "55ACEE">
                    <BsTwitter />
                </SocialIcon>
                <SocialIcon color = "E4405F">
                    <BsInstagram />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem><Link to = "/" style = {{textDecoration: "none", color: "black"}}>Home</Link></ListItem>
                <ListItem><Link to = "/newsletter" style = {{textDecoration: "none", color: "black"}}>Newsletter</Link></ListItem>
                <ListItem><Link to = "/register" style = {{textDecoration: "none", color: "black"}}>Register</Link></ListItem>
                <ListItem><Link to = "/signin" style = {{textDecoration: "none", color: "black"}}>Sign-In</Link></ListItem>
                <ListItem><Link to = "/cart" style = {{textDecoration: "none", color: "black"}}>Cart</Link></ListItem>
                <ListItem><Link to = "/wishlist" style = {{textDecoration: "none", color: "black"}}>Wishlist</Link></ListItem>
                <ListItem><Link to = "/apparel" style = {{textDecoration: "none", color: "black"}}>Apparel</Link></ListItem>
                <ListItem><Link to = "/electronics" style = {{textDecoration: "none", color: "black"}}>Electronics</Link></ListItem>
                <ListItem><Link to = "/furniture" style = {{textDecoration: "none", color: "black"}}>Furniture</Link></ListItem>
                <ListItem><Link to = "/sale" style = {{textDecoration: "none", color: "black"}}>SALE</Link></ListItem>
                <ListItem><Link to = "/support" style = {{textDecoration: "none", color: "black"}}>Support</Link></ListItem>
                <ListItem><Link to = "/termsandconditions" style = {{textDecoration: "none", color: "black"}}>Terms and Conditions</Link></ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><FaMapMarkerAlt style = {{marginRight: 10}} /> 123 Project Dr. Cary, North Carolina, USA 12345</ContactItem>
            <ContactItem><FaPhoneAlt style = {{marginRight: 10}} /> +1 (123)-456-7890</ContactItem>
            <ContactItem><FiMail style = {{marginRight: 10}} /> support@rayzshopping.com</ContactItem>
            <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer