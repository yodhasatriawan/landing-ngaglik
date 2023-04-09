import React from 'react'

//create constant for Testimonials
const testimonies = [
  {
    name: 'Adison Westervelt',
    job: 'Senior Programmer',
    image:
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    name: 'Adison Westervelt',
    job: 'Specialist',
    image:
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    name: 'Adison Westervelt',
    job: 'Specialist',
    image:
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

function Testimonials() {
  return (
    //testimonials in card grids with 3 columns and text style similar to other components
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {testimonies.map((testimony, index) => (
        <div
          key={index}
          className="bg-white px-6 py-6 border-[1.8px] border-[#E5E5E5] rounded-xl"
        >
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row space-x-4">
              <img
                src={testimony.image}
                alt={testimony.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="space">
                <h3 className="text-text text-[16px] font-normal text-lg text-ellipsis overflow-hidden">
                  {testimony.name}
                </h3>
                <h4 className="text-brand text-[16px] font-normal text-lg text-ellipsis overflow-hidden">
                  {testimony.job}
                </h4>
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-1">
              {testimony.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Testimonials
