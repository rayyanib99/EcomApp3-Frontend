import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { MdOutlineAddCircleOutline, MdOutlineRemoveCircleOutline, MdPayment } from 'react-icons/md';
import { AiOutlineShoppingCart, AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Container = styled.div
    ``

const Wrapper = styled.div
    `padding: 20px;
     border-bottom: 1px solid rgb(49, 170, 218);
    `

const Title = styled.h1
    `font-weight: 500;
     text-align: center;
     margin-bottom: 40px;
     text-decoration: underline;
    `

const Bottom = styled.div
    `display: flex;
     align-items: center;
     justify-content: space-around;
     padding: 20px;
     margin-top: 40px;
    `

const BottomButton = styled.button
    `padding: 10px;
     font-weight: 600;
     cursor: pointer;
     border: 1px solid rgb(49, 170, 218);
     background-color: ${props => props.type === "filled" ? "rgb(49, 170, 218)" : "rgb(49, 170, 218)"};
     color: ${props => props.type === "filled" && "black"};
     &:hover
     {
        background-color: ${props => props.type === "filled" ? "rgb(160, 211, 231)" : "rgb(160, 211, 231)"};
        text-decoration: underline;
     }
    `

const BottomTexts = styled.div
    ``

const BottomText = styled.span
    `cursor: pointer;
     margin: 0px 10px;
     &:hover
     {
        text-decoration: underline;
     }
    `

const Top = styled.div
    `display: flex;
     justify-content: space-between;
    `

const Information = styled.div
    `flex: 3;`

const Product = styled.div
    `display: flex;
     justify-content: space-between;
    `

const ProductDetail = styled.div
    `flex: 2;
     display: flex;
    `

const Image = styled.img
    `width: 200px;`

const Details = styled.div
    `padding: 20px; 
     display: flex;
     flex-direction: column;
     justify-content: space-around;
    `

const ProductName = styled.span
    ``

const ProductId = styled.span
    ``

const ProductColor = styled.div
    `width: 20px;
     height: 20px;
     border-radius: 50%;
     margin-left: 2px;
     background-color: ${props => props.color};
    `

const ProductColorLabel = styled.span
    `display: flex;`  

const ProductSize = styled.span
    ``

const PriceDetail = styled.div
    `flex: 1;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-center: center;
    `

const ProductAmountContainer = styled.div
    `display: flex;
     align-items: center;
     margin-bottom: 20px;
    `

const ProductQuantity = styled.div
    `width: 50px;
     height: 30px;
     border-radius: 10px;
     border 1px solid rgb(49, 170, 218);
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 0px 5px;
    `

const ProductPrice = styled.div
    `font-size: 30px;
     font-weight: 400;
     display: flex;
     align-items: center;
     margin-left: 350px;
     margin-right: 10px;
    `

const Hr = styled.hr
     `background-color: black;
      border: none;
      height: 1px;
      margin-top: 10px;
      margin-bottom: 10px;
     `

const Summary = styled.div
    `flex: 1;
     border: 0.5px solid lightgray;
     border-radius: 10px;
     padding: 20px;
     margin-left: 20px;
     height: 30vh;
    `

const SummaryTitle = styled.h1
    `display: flex;
     font-weight: 500;
     align-items: center;
     justify-center: center;
     margin-left: 100px;
    `

const SummaryItem = styled.div
    `margin: 30px 0px;
     display: flex;
     justify-content: space-between;
     font-size: ${props => props.type === "total" && "24px"};
    `

const SummaryItemText= styled.span
    ``

const SummaryItemPrice = styled.span
    ``

const Cart = () => 
{
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Categories />
        <Wrapper>
            <Title>SHOPPING CART<AiOutlineShoppingCart size = {30} /></Title>
            <Top>
                <Information>
                    <Product>
                        <ProductDetail>
                            <Image src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-select-202207-6-7inch-sierrablue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1655144511904" />
                            <Details>
                                <ProductName><b>Product:</b> Apple - IPhone 13 Pro Max</ProductName>
                                <ProductId><b>ID:</b> A12345I</ProductId>
                                <ProductSize><b>Size:</b> 128 GB</ProductSize>
                                <ProductColorLabel><b>Color:</b> <ProductColor color = "#9BB5CE" /></ProductColorLabel>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <MdOutlineAddCircleOutline size = {20} />
                                <ProductQuantity>1</ProductQuantity>
                                <MdOutlineRemoveCircleOutline size = {20} />
                                <ProductPrice>$999.99</ProductPrice>
                            </ProductAmountContainer>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-select-202207-6-7inch-gold?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1654897336104" />
                            <Details>
                                <ProductName><b>Product:</b> Apple - IPhone 13 Pro Max</ProductName>
                                <ProductId><b>ID:</b> A67890I</ProductId>
                                <ProductSize><b>Size:</b> 128 GB</ProductSize>
                                <ProductColorLabel><b>Color:</b> <ProductColor color = "#F9E5C9" /></ProductColorLabel>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <MdOutlineAddCircleOutline size = {20} />
                                <ProductQuantity>1</ProductQuantity>
                                <MdOutlineRemoveCircleOutline size = {20} />
                                <ProductPrice>$999.99</ProductPrice>
                            </ProductAmountContainer>
                        </PriceDetail>
                    </Product>
                </Information>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal:</SummaryItemText>
                        <SummaryItemPrice><b>$1999.98</b></SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping:</SummaryItemText>
                        <SummaryItemPrice><b>FREE</b></SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Tax:</SummaryItemText>
                        <SummaryItemPrice><b>$5.90</b></SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type = "total">
                        <SummaryItemText>Total:</SummaryItemText>
                        <SummaryItemPrice><b>$2005.88</b></SummaryItemPrice>
                    </SummaryItem>
                </Summary>
            </Top>
            <Bottom>
                <BottomButton><AiOutlineShopping style = {{marginBottom: -5, marginRight: 5}} size = {20}/>CONTINUE SHOPPING</BottomButton>
                <BottomTexts>
                    <BottomText><Link to = "/cart" style = {{textDecoration: "none", color: "black"}}>CART(2)</Link></BottomText>
                    <BottomText><Link to = "/wishlist" style = {{textDecoration: "none", color: "black"}}>WISHLIST(0)</Link></BottomText>
                </BottomTexts>
                <BottomButton type = "filled">PROCEED TO CHECKOUT<MdPayment style = {{marginBottom: -5, marginLeft: 5}} size = {20}/></BottomButton>
            </Bottom>
        </Wrapper>
        <Products />
        <Footer />
    </Container>
  )
}

export default Cart