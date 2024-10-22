import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 200;
  ${mobile({ textAlign: 'center' })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ textAlign: 'justify' })}
`;

const PriceContainer = styled.div`
  font-weight: 100;
  font-size: 40px;
  ${mobile({ textAlign: 'center' })}
`;

const MRPText = styled.span`
  color: #808080;
  margin-right: 4px;
  ${mobile({ textAlign: 'center' })}
`;

const MRPPrice = styled.span`
  color: #808080;
  text-decoration: line-through;
  margin-right: 8px;
  ${mobile({ textAlign: 'center' })}
`;

const DiscountedPrice = styled.span`
  color: black;
  font-weight: bold;
  ${mobile({ textAlign: 'center' })}
`;

const Tax = styled.p`
  font-size: 15px;
  letter-spacing: 1.5px;
  ${mobile({ textAlign: 'center' })}
`;

const Stars = styled.div`
  padding: 15px 0px;
  ${mobile({ textAlign: 'center' })}
`;

const Review = styled.div`
  color: black;
  padding: 15px 0px;
  ${mobile({ textAlign: 'center' })}
`;

const Expiry = styled.div`
  color: black;
  font-weight: bold;
  ${mobile({ textAlign: 'center' })}
`;

const QtyContainer = styled.div`
  padding: 15px 0px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  ${mobile({ justifyContent: 'center' })}
`;

const Qty = styled.div`
  padding-right: 15px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const CartButton = styled.button`
  display: block;
  padding: 20px 50px;
  margin-bottom: 25px;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: #25a0e7;
  cursor: pointer;
  font-weight: 700;
  ${mobile({ width: '100%' })}

  &:hover {
    background-color: #0c98e8;
  }
`;

const BuyButton = styled.button`
  display: block;
  padding: 20px 50px;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: #225895;
  cursor: pointer;
  font-weight: 700;
  ${mobile({ width: '100%' })}

  &:hover {
    background-color: #0e4d96;
  }
`;

function Product() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://ik.imagekit.io/anscommerce/image/tr:e-sharpen-01,h-1500,w-1500,cm-pad_resize/catalog/engage/product/PENPS0134/PENPS0134_1.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>
            Indigo Skies Perfume for Men, Eau de Parfum, Earthy & Aqua,
            Long-Lasting
          </Title>
          <Desc>
            For Everyday Use, Earthy and Aqua Notes, Safe on Skin, Long Lasting,
            Ideal for Gifting, Free 3ml tester with every pack
          </Desc>
          <PriceContainer>
            <MRPText>MRP:</MRPText>
            <MRPPrice>549</MRPPrice>
            <DiscountedPrice>&#8377;499</DiscountedPrice>
            <Tax>Inclusive Of All Taxes</Tax>
          </PriceContainer>
          <Stars>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
          </Stars>
          <Review>155 reviews / Write a review</Review>
          <Expiry>Expiry date - May 01, 2029</Expiry>
          <QtyContainer>
            <Qty>Qty</Qty>
            <RemoveIcon style={{ border: '1px solid gray' }} />
            <Amount>1</Amount>
            <AddIcon style={{ border: '1px solid gray' }} />
          </QtyContainer>
          <CartButton>ADD TO CART</CartButton>
          <BuyButton>BUY NOW</BuyButton>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
