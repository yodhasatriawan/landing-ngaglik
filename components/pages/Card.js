import React from 'react'

const portfolios = [
  {
    name: 'Bookies',
    image:
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'read digital book application',
  },
  {
    name: 'BWallet',
    image:
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'digital wallet application',
  },
  {
    name: 'GOJEK',
    image:
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'digital wallet application',
  },
  {
    name: 'Bookies',
    image:
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'read digital book application',
  },
  {
    name: 'BWallet',
    image:
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'digital wallet application',
  },
  {
    name: 'GOJEK',
    image:
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'digital wallet application',
  },
]

function Card() {
  return (
    <div className="mx-auto mt-14 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolios.map((portofolio, index) => (
          <div
            key={index}
            className="bg-white px-3 py-3 border-[1.8px]  border-[#E5E5E5] rounded-xl"
          >
            <div className="rounded-xl">
              <img
                src={portofolio.image}
                className="w-80 h-60 object-cover rounded-xl"
              />
            </div>
            <div className="pt-4 pb-2 px-2">
              <h3 className="font-medium text-[18px] text-text">
                <span aria-hidden="true" className="absolute inset-0" />
                {portofolio.name}
              </h3>
              <h4 className="text-[14px] text-text">
                <span aria-hidden="true" className="absolute inset-0" />
                {portofolio.description}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
