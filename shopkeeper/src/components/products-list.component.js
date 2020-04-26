import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const {
    product: { title, description, _id },
  } = props;
  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <Link to={'/edit/' + _id}>edit</Link> |{' '}
        <a
          href='#'
          onClick={() => {
            props.deleteProduct(_id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

const ProductsList = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5050/products/')
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete('http://localhost:5050/products/' + id)
      .then((res) => console.log(res.data));
    setProduct(products.filter((el) => el._id !== id));
  };

  const productList = () => {
    return products.map((currentproduct) => {
      return (
        <Product
          product={currentproduct}
          deleteProduct={deleteProduct}
          key={currentproduct._id}
        />
      );
    });
  };

  return (
    <div>
      <h3>Logged products</h3>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{productList()}</tbody>
      </table>
    </div>
  );
};

export default ProductsList;
