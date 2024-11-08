import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : 'http://localhost:5000/api/products'
        );
        setProducts(res.data);
      } catch (err) {
        if (err.response) {
          console.log(`Error: ${err.response.status} - ${err.response.data}`);
        } else {
          console.log('Error: Could not reach the server');
        }
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;

// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   gap: 1.5em;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// function Products({ category, filters, sort }) {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const response = await axios.get(
//           category
//             ? `http://localhost:5000/api/products?category=${category}`
//             : 'http://localhost:5000/api/products'
//         );
//         setProducts(response.data);
//       } catch (error) {}
//     };
//     getProducts();
//   }, [category]);

//   useEffect(() => {
//     category &&
//       setFilteredProducts(
//         products.filter((item) =>
//           Object.entries(filters).every(([key, value]) => {
//             item[key].includes(value);
//           })
//         )
//       );
//   }, [products, category, filters]);

//   useEffect(() => {
//     if (sort === 'best') {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => (a.createdAt = b.createdAt))
//       );
//     } else if (sort === 'popularity') {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => (a.createdAt = b.createdAt))
//       );
//     } else if (sort === 'discount') {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => (a.createdAt = b.createdAt))
//       );
//     } else if (sort === 'lowtohigh') {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => (a.price = b.price))
//       );
//     } else if (sort === 'hightolow') {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => (b.price = a.price))
//       );
//     }
//   }, [sort]);

//   return (
//     <Container>
//       {category
//         ? filteredProducts.map((item) => <Product key={item.id} item={item} />)
//         : products.map((item) => <Product key={item.id} item={item} />)}
//     </Container>
//   );
// }
