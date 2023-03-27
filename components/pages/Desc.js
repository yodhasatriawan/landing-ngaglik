import React from 'react'
import Radar from '@/components/svgs/radar'

function Desc() {
  return (
    <div className="">
            <div className="flex flex-row justify-between items-center w-full">
              <h3 className="flex flex-col font-light text-[34px] py-9 leading-[120%]">
                <span>It's me</span>
                <span>Rajendra Yodha</span>
              </h3>
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                className="justify-self-end h-14 w-14 object-cover rounded-full md:relative md:ml-6"
              />
              <Radar className="z-[-99] absolute right-0" />
            </div>

            <h4 className="space-y-8">
              <p>
                I like to code and keep it simple, try something new, and learn
                more. I think sharing knowledge is the best practice to improve
                my skills, and I try to do it.
              </p>
              <p>
                I am currently the Chief Technology Officer at
                <span className="text-brand"> NGAGLIK</span>, a startup to help
                myself to improve.
              </p>
            </h4>
          </div>
  )
}

export default Desc