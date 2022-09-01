import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { MdOutlineAddCircleOutline, MdOutlineRemoveCircleOutline } from 'react-icons/md';
import Categories from '../components/Categories';

const Container = styled.div
    ``

const Wrapper = styled.div
    `padding: 80px;
     display: flex;
    `
const ImageContainer = styled.div
    `flex: 1;`

    const Image = styled.img
    `width: 80%;
     height: 80vh;
    `
const InformationContainer = styled.div
    `flex: 1;
     padding: 0px 50px;
    `

const Title = styled.h1
    `font-weight: 500;
    `

const Description = styled.p
    `font-weight: 400;
     margin: 20px 0px;
    `

const Price = styled.span
    `font-weight: 400;
     font-size: 30px;
     margin: 10px 0px;
    `
const Condition = styled.p
    `margin: 10px 0px;
     font-weight: bold;
     color: orange;
    `

const Status = styled.p
    `margin: 10px 0px;
     font-weight: bold;
     color: green;
    `

const Inventory = styled.p
    `font-weight: bold;
     color: red;
    `

const FilterContainer = styled.div
    `display: flex;
     flex-direction: column;
     justify-content: space-between;
     width: 50%;
     margin: 30px 0px;
    `

const Filter = styled.div
    `display: flex;
     align-items: center;
     margin: 10px 0px;
    `

const FilterTitle = styled.span
    `font-size: 20px;
     font-weight: 500;
    `

const FilterColor = styled.div
    `width: 20px;
     height: 20px;
     padding: 5px;
     border-radius: 50%;
     background-color: ${props => props.color};
     margin: 0px 5px;
     cursor: pointer;
    `

const FilterSize = styled.select
    `margin-left: 10px;
     padding: 5px;
    `

const FilterSizeOption = styled.option
    ``

const AddContainer = styled.div
    `display: flex;
     align_items: center;
     justify-content: space-between;
     width: 43%;
    `

const AmountContainer = styled.div
    `display: flex;
     align-items: center;
     font-weight: 700;
    `

const Amount = styled.span
    `width: 50px;
     height: 30px;
     border-radius: 10px;
     border 1px solid rgb(49, 170, 218);
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 0px 5px;
    `

const Button = styled.button
    `padding: 10px;
     border: 1px solid rgb(49, 170, 218);
     background-color: rgb(49, 170, 218);
     cursor: pointer;
     font-weight: 500;
     &:hover
     {
        background-color: rgb(160, 211, 231);
     }
    `

const Product = () => 
{
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Categories />
        <Wrapper>
            <ImageContainer>
                <Image src = "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg" />
            </ImageContainer>
            <InformationContainer>
                <Title>Apple - IPhone 13 Pro Max</Title>
                <Description>State-of-the-art, sleek design.</Description>
                <Price>$999.99</Price>
                <Condition>NEW</Condition>
                <Status>In-Stock</Status>
                <Inventory>4 pieces remaining.</Inventory>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color: </FilterTitle>
                        <FilterColor color = "#F6E0C9" />
                        <FilterColor color = "#5C5B57" />
                        <FilterColor color = "#9BB5CE" />
                        <FilterColor color = "#F5F5F0" />
                        <FilterColor color = "#505F4E" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Storage: </FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>128 GB</FilterSizeOption>
                            <FilterSizeOption>256 GB</FilterSizeOption>
                            <FilterSizeOption>512 GB</FilterSizeOption>
                            <FilterSizeOption>1 TB</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <MdOutlineRemoveCircleOutline size = {20} />
                        <Amount>1</Amount>
                        <MdOutlineAddCircleOutline size = {20} />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InformationContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product