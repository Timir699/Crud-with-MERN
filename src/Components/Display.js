import React, { useEffect, useState } from 'react';

const Display = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then( res => res.json())
        .then( data => setAllUsers(data))
    }, []);

    const deleteHandler = id => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, { 
            method: 'DELETE'
        })
        .then( () => {
            fetch('http://localhost:5000/users')
            .then( res => res.json())
            .then( data => setAllUsers(data))
        } )
        
    }

    return (
        <div>
           {
               allUsers.map( user => (
                   <div>
                       <h3>{user.name}</h3>
                       <h3>{user.email}</h3>
                       <button onClick={() => deleteHandler(user._id) }>Delete</button>
                       <button>Update</button>
                   </div>
               ) )
           }
        </div>
    );
};

export default Display;