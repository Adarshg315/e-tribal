import React, { useState } from 'react';

const CreateProduct = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    // onChangeTitle = onChangeTitle.bind(this);
    // onChangeDescription = onChangeDescription.bind(this);
    // onSubmit = onSubmit.bind(this);

    // const useEffect = () =>(() => {
    // // Update the document title using the browser API
    //     users: ['test user']
    //     username: 'test user'
    // });
    
    const onChangeUsername = (e) =>{
        setUsername(e.target.value)
    }
    
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        const product = {
            username: username,
            title: title,
            description: description
          };
        console.log(product)     
        window.location = '/';
    }
    return(
    <div>
        <h3>Create New Product Log</h3>
        <form onSubmit={onSubmit}>
            <div className="form-group"> 
                <label>Username: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={username}
                    onChange={onChangeUsername}>
                    {
                    users.map((user) => {
                        return <option 
                        key={user}
                        value={user}>{user}
                        </option>;
                    })
                    }
                </select>
          </div>
            <div className="form-group"> 
                <label>Product: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={title}
                    onChange={onChangeTitle}
                    />
            </div>
            <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={description}
                    onChange={onChangeDescription}
                    />
            </div>
            <div className="form-group">
                <input type="submit" value="Create Product Log" className="btn btn-primary" />
            </div>
        </form>
    </div>
    
    // <div>
    //     <p>You are on the Create Product component!</p>
    // </div>
    )};

export default CreateProduct
