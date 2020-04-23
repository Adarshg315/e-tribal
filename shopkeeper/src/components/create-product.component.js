import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CreateProduct = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const product = {
      title,
      description,
    };

    console.log('product', product);
    axios
      .post('http://localhost:5050/products/add', product)
      .then((res) => console.log(res.data));
    // window.location = '/';
  };
  useEffect(() => {
    axios
      .get('http://localhost:5050/users/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
            username: response.data[0].username,
          });
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>Create New Product</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Title: </label>
          <input
            type='text'
            required
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>Description: </label>
          <input
            type='text'
            required
            className='form-control'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <input
            type='submit'
            value='Create Exercise Log'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
