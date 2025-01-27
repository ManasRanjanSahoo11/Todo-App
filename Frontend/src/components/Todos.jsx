import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

function Todos() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const res = await axios.get("http://localhost:8080/v1/api/get-todos", {withCredentials: true});
            setTodos(res.data.todos);
        } catch (err) {
            console.error(err);
            alert("Error! fetching todos");
        }
    };

    useEffect(() => {
        fetchTodos(); 
    }, []); 

    return (
        <div className='grid grid-cols-3 flex-wrap gap-10 w-full h-[90vh] p-5 overflow-y-auto overflow-x-hidden'>
            {todos.map((todo, index) => (
                <Card key={index} todo={todo} />
            ))}
        </div>
    );
}

export default Todos;