import React from 'react'
import TaskIcon from '@/components/svgs/task'
import BookIcon from '@/components/svgs/book'

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

function Hero() {
  return (
    <main className="px-4 py-12 md:px-12 xl:px-24">
      {/* Hero */}
      <section className="mt-[58px] mx-auto space-y-8">
        <div>
          <h3 className="xl:px-4 flex flex-col font-light text-[34px] md:text-[72px] leading-[120%]">
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
        <div className="space-y-8">
          <h4 className="text-text max-w-[374px]">
            with me <span className="text-brand"> rajendra yodha</span>, a
            software developer who loves to share how to code in many programing
            languages and multi platforms.
          </h4>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="py-2 px-6 text-sm leading-[160%] bg-brand rounded-full text-white">
              Start learn
            </button>
            <div className="lg:hidden md:hidden flex items-center space-x-4">
              {icons.map((icon, index) => (
                <a key={index}>
                  <icon.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
