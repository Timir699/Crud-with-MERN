import React, { useState } from 'react';

const Add = () => {
    const [user, setUser] = useState({})
    const handleAdd = e => {
        e.preventDefault();
        console.log(user);
        fetch('http://localhost:5000/users', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })


    }
    const handleAddData = e => {
        setUser({
            ...user,
           [e.target.name]: e.target.value
        })

    }

    return (
        <div>
            add data
            <form onSubmit={handleAdd}>
               <input type="text" name="name" value={user.name} onChange={(e) => handleAddData(e)}  />
               <br/>
               <input type="text" name="email" value={user.email} onChange={(e) => handleAddData(e)}/>
               <br/>
               <button type="submit">Add Data</button>
           </form>
        </div>
    );
};

export default Add;