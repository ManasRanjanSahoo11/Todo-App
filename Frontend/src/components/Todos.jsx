import React from 'react'
import Card from './Card'

function Todos() {
    return (
        <div className='grid grid-cols-3 flex-wrap gap-10 w-full h-[90vh] p-5 overflow-y-auto overflow-x-hidden'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Todos
