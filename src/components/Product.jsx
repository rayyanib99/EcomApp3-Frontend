import styled from 'styled-components';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

const Information = styled.div
    `opacity: 0;
     width: 100%;
     height: 100%;
     position: absolute;
     top: 0;
     left: 0;
     background-color: rgba(0, 0, 0, 0.2);
     z-index: 3;
     display: flex;
     align-items: center;
     justify-content: center;
     transition: all 0.5s ease;
    `

const Container = styled.div
    `flex: 1;
     margin: 5px;
     min-width: 280px;
     height: 350px;
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: rgb(160, 211, 231);
     position: relative;
     &:hover
     ${Information}
     {
        opacity: 1;
     }
    `

const Circle = styled.div
    `width: 200px;
     height: 200px;
     border-radius: 50%;
     background-color: white;
     position: absolute;
    `

const Image = styled.img
    `height: 75%;
     z-index: 2;
    `

const Icon = styled.div
    `width: 40px;
     height: 40px;
     border-radius: 50%;
     background-color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 10px;
     cursor: pointer;
     transition: all 0.5s ease;
     &:hover
     {
        background-color: rgb(49, 170, 218);
        transform: scale(1.1);
     }
    `

const Product = ({item}) => 
{
  return (
    <Container>
        <Circle />
        <Image src = {item.img} />
        <Information>
            <Icon>
                <AiOutlineShoppingCart />
            </Icon>
            <Icon>
                <FaSearch />
            </Icon>
            <Icon>
                <AiOutlineHeart />
            </Icon>
        </Information>
    </Container>
  )
}

export default Product