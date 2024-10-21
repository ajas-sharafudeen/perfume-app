import styled from 'styled-components';

const Container = styled.div`
  height: 4vh;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bolder;
`;

function Announcement() {
  return <Container>Free Shipping on orders above Rs. 500</Container>;
}

export default Announcement;
