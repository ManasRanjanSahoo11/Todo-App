import Card from './Card';
import axios from 'axios';

function Todos({todos, fetchTodos}) {

    const handleDeleteTodo = async (todoId) => {
        // console.log(todoId);

        // Confirm deletion
        if (!window.confirm("Are you sure you want to delete this todo?")) return;

        const res = await axios.delete(`http://localhost:8080/v1/api/delete-todo/${todoId}`, {
            withCredentials: true
        })

        if (res.data) {
            alert(res.data.msg)
            fetchTodos()
        } else {
            alert("Something went wrong!")
        }

    }

    const handleEditTodo = (todoId) => { }


    return (
        <div className='grid grid-cols-3 flex-wrap gap-10 w-full h-[90vh] p-5 overflow-y-auto overflow-x-hidden'>
            {todos.map((todo, index) => (
                <Card key={index} todo={todo} onDelete={() => { handleDeleteTodo(todo._id) }} />
            ))}
        </div>
    );
}

export default Todos;