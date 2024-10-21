import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  /* min-width: 280px; */
  /* height: 350px; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  border: 1px solid #d4d4d4da;
`;

const Labels = styled.div`
  height: 20px;
  display: flex;
  justify-content: space-between;
`;
const SaleCategory = styled.span`
  padding: 0px 5px;
  color: #fff;
  font-weight: bold;
  background-color: #0352a8;
`;
const SalePercentage = styled.span`
  padding: 0px 5px;
  color: #fff;
  background-color: #267fde;
`;

const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Fragrances = styled.div`
  height: 20px;
  margin: 0px 10px;
  display: flex;
  justify-content: space-around;
`;
const FirstMix = styled.span`
  flex: 1;
  text-align: center;
  color: #5d5d5d;
  background-color: #fffd76;
`;
const SecondMix = styled.span`
  flex: 1;
  text-align: center;
  color: #5d5d5d;
  background-color: #ffe0aa;
`;

const Image = styled.img`
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  padding: 5px;
`;

const Quantity = styled.div`
  width: 30%;
  padding: 5px;
  color: #2f2f2f;
  background-color: #cdcdcd;
  text-align: center;
`;

const Buttons = styled.div`
  height: 40px;
  border: 1px solid red;
  background-color: #225895;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WishList = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AddToCart = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  margin-right: 10%;
  justify-content: center;
  align-items: center;
`;

const AddText = styled.div``;

function Product({ item }) {
  return (
    <Container>
      <Labels>
        <SaleCategory>Best Seller</SaleCategory>
        <SalePercentage>20% OFF</SalePercentage>
      </Labels>
      <ProductImage>
        <Image src={item.img} />
      </ProductImage>
      <Fragrances>
        <FirstMix>AMBERY</FirstMix>
        <SecondMix>WARM</SecondMix>
      </Fragrances>
      <Info>
        <Title>{item.title}</Title>
        <Quantity>{item.quantity}</Quantity>
      </Info>
      <Buttons>
        <WishList>
          <FavoriteBorderIcon fontSize="large" />
        </WishList>
        <AddToCart>
          <ShoppingCartOutlinedIcon />
          <AddText>ADD</AddText>
        </AddToCart>
      </Buttons>
    </Container>
  );
}

export default Product;
