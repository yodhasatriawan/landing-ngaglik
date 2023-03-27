import React from 'react'

//create constant for Testimonials
const testimonies = [
    {
        name: 'John Doe',
        image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'Jane Doe',
        image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'John Doe',
        image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
]

function Testimonials() {
  return (
    //testimonials in card grids with 3 columns and text style similar to other components
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonies.map((testimony, index) => (
            <div key = {index} className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex flex-col items-center">
                    <img src={testimony.image} alt={testimony.name} className="w-20 h-20 rounded-full object-cover"/>
                    <h1 className="text-gray-900 font-bold text-lg mt-4">{testimony.name}</h1>
                    <p className="text-gray-600 text-sm mt-1">{testimony.description}</p>
                </div>
            </div>
        ))}
    </div>
    )
}

export default Testimonials
