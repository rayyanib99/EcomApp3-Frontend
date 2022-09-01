import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import { useNavigate } from 'react-router-dom';
import { countries, states } from '../data';
import axios from "axios";

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
    `width: 40%;
     height: 70%;
     padding 80px;
     background-color: rgb(160, 211, 231);
    `

const Required = styled.label
    `flex: 1;
     display: flex;
     align-items: center;
     justify-content: flex-end;
     margin: -30px 0px 30px 0px;
     `

const Title = styled.h1
    `font-size: 24px;
     font-weight: 600;
     text-decoration: underline;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: -60px 0px 30px 0px;
    `

const Form = styled.form
    `display: flex;
     flex-wrap: wrap;
    `

const Label = styled.label
    `flex: 1;
     margin: 0px 0px 20px 0px;
     width: 200vw;
    `

const Radio = styled.div
    `display: flex;
     align-items: center;
     justify-content: center;
     margin: -10px 200px 20px 250px;
    `    

const RadioInput = styled.label
    `display: flex;
     align-items: center;
     justify-content: center;
     margin-left: -370px;
     margin-top: 30px;
     margin-right: -80px;
     margin-bottom: 10px;
     font-size: 14px;
    `

const RadioLabel = styled.label
    `display: flex;
     align-items: center;
     justify-content: center;
     margin-left: -30px;
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

const Select = styled.select
    `flex: 1;
     min-width: 80%;
     margin: 5px 20px 0px 0px;
     padding: 10px;
    `

const Option = styled.option
    ``

const Agreement = styled.span
    `font-size; 12px;
     margin: 20px 0px;
    `

const Button = styled.button
    `width: 40%;
     border: 1px solid rgb(49, 170, 218);
     padding: 15px 20px;
     background-color: rgb(49, 170, 218);
     cursor: pointer;
     font-weight: 500;
     &:hover
     {
        background-color: rgb(160, 211, 231);
        text-decoration: underline;
     }
    `

const Register = () => 
{
  let navigate = useNavigate();

  const countryList = [...new Set(countries.map(item => item.Country))];
  countryList.sort();

  const stateList = [...new Set(states.map(item => item.name))];
  stateList.sort();

  const cityList = [...new Set(countries.map(item => item.Name))];
  cityList.sort();

  const [user, setUser] = useState(
    {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        password: '',
        isAdmin: ''
    });

  const{firstName, lastName, email, phoneNumber, address, city, state, country, zipCode, password} = user;

  const onInputChange = (e) => 
  {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => 
  {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/users/", user);
    navigate("/signin");
  };

  return (
    <Container>
        <Announcement />
        <Navbar />
        <Categories />
        <Frame>
            <Wrapper>
                <Required><b><Asterisk>*</Asterisk>required fields.</b></Required>
                <Title>REGISTER</Title>
                <Form onSubmit = {(e) => onSubmit(e)}>
                    <Label>FIRST NAME:<Asterisk>*</Asterisk>
                        <Input type = {"text"} name = {"firstName"} onChange = {(e) => onInputChange(e)} value = {firstName} placeholder = {"Enter Your First Name"} required />
                    </Label>
                    <Label>LAST NAME:<Asterisk>*</Asterisk>
                        <Input type = {"text"} name = {"lastName"} onChange = {(e) => onInputChange(e)} value = {lastName} placeholder = {"Enter Your Last Name"} required />
                    </Label>
                    <Label>EMAIL:<Asterisk>*</Asterisk>
                        <Input type = {"email"} name = {"email"}onChange = {(e) => onInputChange(e)} value = {email} placeholder = {"Enter Your Email"} required />
                    </Label>
                    <Label>CONTACT NUMBER:<Asterisk></Asterisk>
                        <Input type = {"text"} name = {"phoneNumber"} onChange = {(e) => onInputChange(e)} value = {phoneNumber} placeholder = {"Enter Your Phone Number"} maxLength = {10} />
                    </Label>
                    <Label>ADDRESS:<Asterisk></Asterisk>
                        <Input type = {"text"} name = {"address"} onChange = {(e) => onInputChange(e)} value = {address} placeholder = {"Enter Your Street Address"} />
                    </Label>
                    <Label>CITY:<Asterisk></Asterisk>
                        <Select style = {{width: 230}} name = {"city"} onChange = {(e) => onInputChange(e)} value = {city}>
                           <Option value = {""}>Select City</Option>
                           {cityList.map((e) =>
                            {
                                return( 
                                <Option value = {e} key = {e.id}>{e}</Option>);
                            })}
                        </Select>
                    </Label>
                    <Label>STATE/PROVINCE: <b>(US and CANADA ONLY)</b>
                        <Select name = {"state"} onChange = {(e) => onInputChange(e)} value = {state}>
                           <Option value = {""}>Select State/Province</Option>
                           {stateList.map((e) =>
                            {
                                return( 
                                <Option value = {e} key = {e.id}>{e}<p>{e.abbreviation}</p></Option>);
                            })}
                        </Select>
                    </Label>
                    <Label style = {{marginTop: 14}}>COUNTRY:<Asterisk>*</Asterisk>
                        <Select style = {{width: 230}} name = {"country"} onChange = {(e) => onInputChange(e)} value = {country} required>
                           <Option value = {""}>Select Country</Option>
                           {countryList.map((e) =>
                            {
                                return( 
                                    <Option value = {e} key = {e.id}>{e}</Option>);
                            })}
                        </Select>
                    </Label>
                    <Label style = {{marginTop: 14}}>ZIPCODE:<Asterisk></Asterisk><b>(ex. 00000)</b>
                        <Input type = {"text"} pattern = {"[0-9]{5}"} name = {"zipCode"} onChange = {(e) => onInputChange(e)} value = {zipCode} placeholder = {"Enter Your ZipCode"} maxLength = {5} />
                    </Label>
                    <Label>SET PASSWORD:<Asterisk>*</Asterisk> (minimum 8 characters)
                        <Input style = {{width: 333}} type = {"password"} name = {"password"} onChange = {(e) => onInputChange(e)} value = {password} placeholder = {"Enter Your Password"} minLength = {8} required />
                    </Label>
                    <Label>RE-TYPE PASSWORD:<Asterisk>*</Asterisk>
                        <Input style = {{width: 333}} type = {"password"} placeholder = {"Re-Enter Your Password"} minLength = {8} required/>
                    </Label>
                    <Radio>IS THIS USER AN ADMINISTRATOR?:<Asterisk>*</Asterisk></Radio>
                    <RadioInput>
                        <Input type = {"radio"} name = {"isAdmin"} onChange = {(e) => onInputChange(e)} value = {"YES"} required /> <RadioLabel>YES</RadioLabel>
                        <Input type = {"radio"} name = {"isAdmin"} onChange = {(e) => onInputChange(e)} value = {"NO"} required /> <RadioLabel>NO</RadioLabel>
                    </RadioInput>
                    <Agreement>BY CREATING AN ACCOUNT, I CONSENT TO THE PROCESSING OF MY PERSONAL DATA IN ACCORDANCE WITH THE <b>PRIVACY POLICY</b></Agreement>
                    <Button type = {"submit"}>CREATE ACCOUNT</Button>
                </Form>
            </Wrapper>
        </Frame>
        <Footer />
    </Container>
  )
}

export default Register