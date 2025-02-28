import React from 'react'

function Card({ todo, onDelete }) {

    return (
        <div className='w-96 h-fit bg-gray-800 rounded-xl text-white px-4'>
            <h2 className='font-semibold leading-none tracking-tight text-4xl py-5 line-clamp-2'>{todo.title}</h2>
            <p className='font-medium pb-5 leading-none'>{todo.description}</p>
            {
                todo.done ? (
                    <div className="flex items-center gap-2 p-2">
                        <input type="checkbox" id="done" className="w-4 h-4" checked />
                        <label htmlFor="done" className="text-sm font-medium text-white">
                            Done
                        </label>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 p-2">
                        <input type="checkbox" id="done" className="w-4 h-4" />
                        <label htmlFor="done" className="text-sm font-medium text-white">
                            Done
                        </label>
                    </div>
                )
            }

            <div className="flex justify-end space-x-4 pb-5">
                {/* <button onClick={() => handleEditTodo(todo._id)} className="px-4 py-1.5 bg-violet-500 text-white text-sm font-medium rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Edit
                </button> */}
                <button onClick={() => onDelete(todo._id)} className="px-4 py-1.5 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
                    Delete
                </button>
            </div>

        </div>
    )
}

export default Card
