import React from 'react'

function Footer() {
  return (
    <footer className="py-20 z-[99] w-full bg-gradient-to-t from-white">
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-[24px] text-center leading-[102%] max-w-xs">
          So, what are you <br /> waiting for?
        </h1>
        <button className="py-2 px-6 text-normal text-white bg-brand rounded-full">
          Let's start
        </button>
      </div>
    </footer>
  )
}

export default Footer
