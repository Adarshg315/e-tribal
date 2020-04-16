import axios from 'axios';
import React, { useState } from 'react';
const CreateUser = () => {
  const [username, setUsername] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
    };
    console.log(newUser);
    axios
      .post('http://localhost:5050/users/add', newUser)
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username: </label>
          <input
            type='text'
            required
            className='form-control'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Create User'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
