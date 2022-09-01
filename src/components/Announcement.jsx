import styled from 'styled-components';
import { FaShippingFast } from 'react-icons/fa';

const Container = styled.div
    `height: 30px;
     background-color: black;
     color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     font-size: 14px;
     font-weight: 500;
    `

const Announcement = () => 
{
  return (
    <Container>
        <FaShippingFast style = {{transform: "rotateY(180deg)"}} /> FREE SHIPPING On All Orders $50+
    </Container>
  )
}

export default Announcement