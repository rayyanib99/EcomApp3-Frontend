import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Categories from '../components/Categories';

const Container = styled.div
    ``

const Title = styled.h1
    `margin: 20px;`

const FilterContainer = styled.div
    `display: flex;
     justify-content: space-between;
    `

const Filter = styled.div
    `margin: 20px;`

const FilterText = styled.span
    `font-size: 20px;
     font-weight: 600;
     margin-right: 20px;
    `

const Select = styled.select
    `padding: 10px;
     margin-right: 20px;
    `

const Option = styled.option
    ``

const ProductList = () => 
{
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Categories />
        <Title>APPAREL</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter By:</FilterText>
                <Select>
                    <Option disabled selected>
                       Type
                    </Option>
                    <Option>Pants</Option>
                    <Option>Shirts</Option>
                    <Option>Suits</Option>
                    <Option>Shorts</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                       Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Pink</Option>
                    <Option>Red</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                       Size
                    </Option>
                    <Option>Small</Option>
                    <Option>Medium</Option>
                    <Option>Large</Option>
                    <Option>X-Large</Option>
                </Select>
                </Filter>
            <Filter>
                <FilterText>Sort By:</FilterText>
                <Select>
                    <Option selected>
                       Newest
                    </Option>
                    <Option>SALE</Option>
                    <Option>$Price (Low to High)</Option>
                    <Option>$Price (High to Low)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList