import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import { Link } from 'react-router-dom';

const Container = styled.div
    `overflow: hidden;`

const Frame = styled.div
    `width: 100vw;
     height: 80vh;
     background-color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     border-bottom: 1px solid rgb(49, 170, 218);
    `

const Wrapper = styled.div
    `width: 25%;
     height: 35%;
     padding 70px;
     background-color: rgb(160, 211, 231);
    `

const Title = styled.h1
    `font-size: 24px;
     font-weight: 600;
     text-decoration: underline;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: -30px 0px 30px 0px;
    `

const Form = styled.form
    `display: flex;
     flex-direction: column;
    `

const Label = styled.label
    `flex: 1;
     margin: 0px 0px 20px 0px;
    `

const Asterisk = styled.span
    `margin-right: 5px;
     color: red;
     font-size: 20px;
    `

const Input = styled.input
    `flex: 1;
     min-width: 80%;
     margin: 5px 20px 0px 0px;
     padding: 10px;
    `

const Button = styled.button
    `width: 40%;
     border: 1px solid rgb(49, 170, 218);
     background-color: rgb(49, 170, 218);
     cursor: pointer;
     padding: 15px 20px;
     font-weight: 500;
     &:hover
     {
        background-color: rgb(160, 211, 231);
     }
    `

const Links = styled.a
     `margin: 20px 0px -10px 0px;
      font-size: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover
      {
         text-decoration: underline;
      }
     `

const Login = () => 
{
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Categories />
        <Frame>
            <Wrapper>
                <Title>SIGN-IN</Title>
                <Form>
                    <Label>EMAIL:<Asterisk>*</Asterisk>
                        <Input placeholder = "Enter Your Email" />
                    </Label>
                    <Label>PASSWORD:<Asterisk>*</Asterisk>
                        <Input placeholder = "Enter Your Password" />
                    </Label>
                    <Button>LOG IN</Button>
                    <Links><Link to = "/reset-password" style = {{textDecoration: "none", color: "black"}}>FORGOT PASSWORD?</Link></Links>
                    <Links><Link to = "/register" style = {{textDecoration: "none", color: "black"}}>DON'T HAVE AN ACCOUNT?</Link></Links>
                </Form>
            </Wrapper>
        </Frame>
        <Footer />
    </Container>
  )
}

export default Login