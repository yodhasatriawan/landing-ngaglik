import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid'
import GithubIcon from '@/components/svgs/github'
import InstagramIcon from '@/components/svgs/instagram'
import TiktokIcon from '@/components/svgs/tiktok'
import YoutubeIcon from '@/components/svgs/youtube'
import TaskIcon from '@/components/svgs/task'
import BookIcon from '@/components/svgs/book'
import Radar from '@/components/svgs/radar'
import Card from '@/components/pages/Card'

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
]

export default function Home() {
  return (
    <>
      <header className="z-[99] fixed w-full bg-gradient-to-b from-white">
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

      <main className="relative px-4 py-12 md:px-12 xl:px-24 ">
        {/* bg-no-repeat bg-right custom-bg */}
        {/* Hero */}
        <section className="mt-[58px] mx-auto space-y-8 lg:py-12 xl:flex xl:justify-between">
          {/* Title */}
          <div>
            <h3 className="xl:px-4 flex flex-col font-light text-[34px] md:text-[72px] leading-[120%] md:leading-[102%]">
              <span className="flex items-center space-x-2">
                Let's learn <TaskIcon className="md:w-14 md:h-14" />
              </span>
              <span className="flex items-center space-x-2">
                to code <BookIcon className="md:w-14 md:h-14" />
              </span>
              <span>an application</span>
            </h3>
          </div>
          {/* Description */}
          <div className="xl:flex xl:items-end space-y-8">
            <div className="xl:flex xl:flex-col space-y-8">
              <h4 className="text-text max-w-[374px]">
                with me <span className="text-brand"> rajendra yodha</span>, a
                software developer who loves to share how to code in many
                programing languages and multi platforms.
              </h4>
              {/* Buttons */}
              <div className="z-[-99] flex space-x-4">
                <button className="py-2 px-6 text-sm leading-[160%] bg-brand rounded-full text-white">
                  Start learn
                </button>
                <div className="lg:hidden flex items-center space-x-4">
                  {icons.map((icon, index) => (
                    <a key={index}>
                      <icon.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Cards */}
        <section>
          {/* <Card /> */}
          <div className=" py-14 ">
            <div className="flex flex-col justify-center space-y-3">
              {portfolios.map((portofolio, index) => (
                <div
                  key={index}
                  className="bg-white px-3 py-3 border-[1.6px] border-dotted border-[#E5E5E5] rounded-xl"
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
              <button className="inline-block py-3 px-6 text-sm leading-[160%] border border-brand rounded-full">
                Load More
              </button>
            </div>
          </div>
        </section>

        {/* It's me */}
        <section>
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
        </section>
      </main>
    </>
  )
}
