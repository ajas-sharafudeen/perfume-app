import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Badge } from '@mui/material';

const Container = styled.div`
  height: 6vh;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  display: inline-block;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: right;
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
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>LOGO</Logo>
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
          <MenuItem>
            <Badge>
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Badge>
          </MenuItem>
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
