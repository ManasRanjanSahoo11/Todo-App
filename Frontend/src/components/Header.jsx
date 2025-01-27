import React, { useState } from 'react'
import axios from 'axios'

function Header() {

    const [open, setOpen] = useState(false)


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [done, setDone] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:8080/v1/api/create-todo', {
                title,
                description,
                done
            },{
                withCredentials:true
            })

            if(response){
                console.log(response);
                alert("Todo created succeessful")

                setOpen(false)
            }
        } catch (err) {
            console.log(err);
            alert("Err! while add todo.")
        }
    }


    return (
        <div className=''>
            <div className='py-4 w-full flex pr-5 justify-end'>
                <a
                    href="#"
                    className="flex items-center px-3 py-2 w-fit rounded-lg dark:text-white bg-violet-500 shadow-md"
                    onClick={() => setOpen(!open)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>

                    <span class="ms-3 font-semibold">Create Todo Here</span>
                </a>
            </div>

            {
                open && <div className='absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 flex items-center justify-center'>
                    <div className='text-white w-[30vw] px-5 py-5 pb-8 bg-gray-800 shadow-lg rounded-lg'>
                        <div
                            onClick={() => setOpen(!open)}
                            className='flex justify-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 cursor-pointer">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <form action="" onSubmit={handleSubmit}>
                            <div className='pb-5'>
                                <label htmlFor="title" className='font-semibold'>Title</label>
                                <input type="text"
                                    name=""
                                    id="title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    className='w-full px-4 py-2 text-sm border rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-transparent mt-2' />
                            </div>
                            <div>
                                <label htmlFor="title" className='font-semibold'>Description</label>
                                <textarea
                                    name=""
                                    id=""
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    rows={4}
                                    className='w-full p-2 text-sm border rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-transparent resize-none mt-2'>
                                </textarea>

                            </div>
                            <div className="flex items-center py-5">
                                <input
                                    type="checkbox"
                                    id="done"
                                    name="done"
                                    onChange={(e) => setDone(e.target.checked)}
                                    value={done}
                                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                />
                                <label htmlFor="done" className="ml-2 text-sm text-gray-400 cursor-pointer">
                                    *Are u Completed?
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                Add Todo
                            </button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header
