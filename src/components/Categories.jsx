import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div
    `display: flex;
     align-items: center;
     justify-content: center;
     margin: 0px;
     height: 5vh;
     width: 100%;
     background-color: rgb(160, 211, 231);
     position: relative;
     overflow: hidden;
    `

const Information = styled.div
    `display: flex;
     align-items: center;
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: flex;
    `

const Title = styled.h1
    `color: black;
     font-size: 12px;
     margin-bottom: 1px;
    `

const Button = styled.button
    `border: none;
     padding: 5px;
     cursor: pointer;
     background-color: rgb(160, 211, 231);
     color: black;
     font-weight: 600;
     margin-left: 30px;
     &:hover
     {
        background-color: rgb(49, 170, 218);
        border-radius: 10px;
     }
    `

const Categories = () => 
{
  return (
    <Container>
        <Information>
            <Link to = "/apparel"><Button><Title>APPAREL</Title></Button></Link>
            <Link to = "/electronics"><Button><Title>ELECTRONICS</Title></Button></Link>
            <Link to = "/furniture"><Button><Title>FURNITURE</Title></Button></Link>
            <Link to = "/sale"><Button><Title>SALE</Title></Button></Link>
        </Information>
    </Container>
  )
}

export default Categories