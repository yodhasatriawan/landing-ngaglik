import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import GithubIcon from '@/components/svgs/github'
import InstagramIcon from '@/components/svgs/instagram'
import TiktokIcon from '@/components/svgs/tiktok'
import YoutubeIcon from '@/components/svgs/youtube'

const menus = [
  { href: '/', text: 'home' },
  { href: '/', text: 'about' },
  { href: '/', text: 'contact' },
]

const icons = [
  {
    href: 'https://www.github.com/yodhasatriawan/',
    icon: GithubIcon,
  },
  {
    href: 'https://www.instagram.com/yodhasatriawan/',
    icon: InstagramIcon,
  },
  {
    href: 'https://www.tiktok.com/rookieyoda/',
    icon: TiktokIcon,
  },
  {
    href: 'https://www.github.com/yodhasatriawan/',
    icon: YoutubeIcon,
  },
]

function Navbar() {
  return (
    <header className="z-[99]  w-full bg-gradient-to-b from-white">
        <div className="py-3 md:py-4 px-4 md:px-12 xl:px-24 mx-auto flex flex-row justify-between items-center ">
          <div className="flex items-center space-x-6">
            <a
              href="/"
              className="flex items-center py-2 xl:px-3 space-x-2 md:space-x-3"
            >
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                className="w-6 h-6 md:w-10 md:h-10 object-cover rounded-full"
              />
              <span className="font-semibold leading-[160%] text-text">
                It's me
              </span>
            </a>

            <nav className="hidden md:block">
              <ul className="flex space-x-2 ">
                {menus.map((menu, index) => (
                  <li key={index}>
                    <a className="px-3 py-2" href={menu.href}>
                      {menu.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-6">
              {icons.map((icon, index) => (
                <a key={index}>
                  <icon.icon />
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <button className="py-2 px-6 text-sm leading-[160%] border border-brand rounded-full">
                Download CV
              </button>
              <button className="md:hidden p-2">
                <Bars3Icon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar
