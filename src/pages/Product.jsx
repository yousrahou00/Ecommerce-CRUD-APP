import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
  height: 60vh;
  object-fit: cover;

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;



const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://img1.cgtrader.com/items/2771328/5a37e59fae/large/apple-iphone-12-pro-max-gold-3d-model-max-obj-3ds-fbx-c4d-ma.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Iphone 13pro max </Title>
          <Desc>
            <h1>Design,Elegance and Resistance</h1>
                6.7-inch Super Retina XDR display with ProMotion for speed and responsivenes.
                Cinematic mode, which reduces depth of field and automatically changes focus in your videos
                Pro camera system with new 12MP telephoto, wide-angle and ultra-wide-angle lenses, LiDAR scanner, 6x optical zoom, 
                macro photography, Photographic Styles, ProRes video, Smart HDR 4, Night mode,
                Apple ProRAW and 4K HDR video recording in Dolby Vision

          </Desc>
          <Price>$ 1800</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
              <FilterColor color="pink" />
              <FilterColor color="green" />
              <FilterColor color="white" />
            </Filter>

          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
