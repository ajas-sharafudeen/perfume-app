import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  display: flex;
  gap: 1.5em;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products({ category, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : 'http://localhost:5000/api/products'
        );
        setProducts(response.data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            item[key].includes(value);
          })
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === 'best') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => (a.createdAt = b.createdAt))
      );
    } else if (sort === 'popularity') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => (a.createdAt = b.createdAt))
      );
    } else if (sort === 'discount') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => (a.createdAt = b.createdAt))
      );
    } else if (sort === 'lowtohigh') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => (a.price = b.price))
      );
    } else if (sort === 'hightolow') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => (b.price = a.price))
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product key={item.id} item={item} />)
        : products.map((item) => <Product key={item.id} item={item} />)}
    </Container>
  );
}

export default Products;
