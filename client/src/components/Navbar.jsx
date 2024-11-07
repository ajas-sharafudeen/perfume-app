import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 6vh;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  display: inline-block;
  cursor: pointer;
  ${mobile({ fontSize: '24px' })}
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: 'center' })}
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: #e6e6e6;
`;

const Input = styled.input`
  width: 250px;
  border: none;
  padding: 5px;
  background-color: #e6e6e6;
  outline: none;
  ${mobile({ width: '50px' })}
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>LOGO</Logo>
          </Link>
        </Left>
        <Right>
          <SearchContainer>
            <SearchIcon style={{ color: 'gray' }} />
            <Input placeholder="Search" />
          </SearchContainer>
          <MenuItem>
            <Badge>
              <FavoriteBorderIcon fontSize="large" />
            </Badge>
          </MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon fontSize="large" />
              </Badge>
            </MenuItem>
          </Link>
          <MenuItem>
            <Badge>
              <PersonOutlineOutlinedIcon fontSize="large" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
