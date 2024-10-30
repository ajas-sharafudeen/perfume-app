import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 5px;
  min-width: 280px;
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
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 50%;
  height: auto;
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
  background-color: #e3ebda;
  text-align: center;
`;

const Reviews = styled.div`
  height: 20px;
  width: 50%;
  margin-left: 30px;
  padding: 5px;
  display: flex;
  justify-content: space-around;
`;

const Rating = styled.p`
  flex: 1;
  font-size: 12px;
  text-align: center;
  color: #4dbb34;
  background-color: #e3ebda;
  padding: 2px 5px;
`;

const Review = styled.p`
  flex: 2;
  text-align: center;
  color: #5d5d5d;
`;

const Price = styled.div`
  font-size: 20px;
  padding: 5px;
  text-align: center;
`;

const Buttons = styled.div`
  height: 40px;
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
  cursor: pointer;
  position: relative;

  &::after {
    content: 'Add to Wish List';
    position: absolute;
    bottom: 125%; /* Position above the element */
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;
const AddToCart = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  margin-right: 10%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AddText = styled.div``;

function Product({ item }) {
  return (
    <Container>
      <Link to={`/product/${item._id}`}>
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
          <Reviews>
            <Rating>{item.rating}</Rating>
            <Review>{item.review}</Review>
          </Reviews>
          <Price>&#8377;{item.price}</Price>
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
      </Link>
    </Container>
  );
}

export default Product;
