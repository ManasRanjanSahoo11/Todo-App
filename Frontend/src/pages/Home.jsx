import React, {useEffect, useState} from 'react'
import axios from 'axios'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Todos from '../components/Todos'

function Home() {

  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
      try {
          const res = await axios.get("http://localhost:8080/v1/api/get-todos", { withCredentials: true });
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
    <div className= 'flex items-start gap-3'>
      <Sidebar />
      <div className='w-[100%]'>
        <Header fetchTodos={fetchTodos} />
        <Todos todos={todos} fetchTodos={fetchTodos} />
      </div>
    </div>
  )
}

export default Home
