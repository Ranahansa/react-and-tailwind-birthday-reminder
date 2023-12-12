import React from 'react'

const List = ({people}) => {
    return (
        <div>
            {people.map((person) => {
                const {id, name, age, image} = person
                return (
                    <article key={id} className="person">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center justify-start">
                            <div className="w-10 h-10 mr-4 bg-gray-300 rounded-full flex items-center justify-center">
                                <img
                                    src={image} 
                                    alt="Avatar" className="w-9 h-9 text-gray-600 rounded-full"/>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-sm font-medium text-gray-900">{name}</div>
                            </div>
                            <div className="flex items-center justify-center"></div>
                        </div>
                        <div className='block'>age: {age} </div>
                    </div>
                </article>
                )
            })}
        </div>
    )
}

export default List