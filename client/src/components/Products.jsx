import styled from 'styled-components';
import { products } from '../data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  gap: 1.5em;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products() {
  return (
    <Container>
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Products;
