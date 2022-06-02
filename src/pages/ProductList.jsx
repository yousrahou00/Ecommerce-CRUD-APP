import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"


const Container =styled.div``
const Title =styled.h1`
    margin: 20px;

`
const FilterContainer =styled.div`
    display: flex;
    justify-content: space-between;


`
const Filter =styled.div`
    margin: 20px;

`
const FilterText = styled.span  `
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option``



const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Nos Products:</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>pink</Option>
            </Select>
            <Select>
            <Option disabled selected>
              tYPE
            </Option>
            <Option>6</Option>
            <Option>6plus</Option>
            <Option>7</Option>
            <Option>7plus</Option>
            <Option>Xs/xsmax/xr</Option>
            <Option>11 Normal</Option>
            <Option>11 pro max</Option>
            <Option>12 mini</Option>
            <Option>12 pro</Option>
            <Option>12 pro max</Option>
            <Option>13</Option>
            <Option>13pro max</Option>
            <Option>SE</Option>
          </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList