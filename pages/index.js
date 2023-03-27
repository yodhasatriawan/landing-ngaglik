import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid'
import GithubIcon from '@/components/svgs/github'
import InstagramIcon from '@/components/svgs/instagram'
import TiktokIcon from '@/components/svgs/tiktok'
import YoutubeIcon from '@/components/svgs/youtube'
import TaskIcon from '@/components/svgs/task'
import BookIcon from '@/components/svgs/book'
import Card from '@/components/pages/Card'
import Navbar from '@/components/pages/Navbar'
import Hero from '@/components/pages/Hero'
import Desc from '@/components/pages/Desc'
import Testimonials from '@/components/pages/Testimonials'



export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative px-4 py-12 md:px-12 xl:px-24 ">
        {/* bg-no-repeat bg-right custom-bg */}
        {/* Hero */}
        <section className="mt-[58px] mx-auto space-y-8 lg:py-12 xl:flex xl:justify-between">
          {/* Title */}
          <Hero/>
        </section>
        {/* Portfolio Cards */}
        <section>
          <Card/>
        </section>
          <div className='flex flex-auto justify-center'>
            <button className="py-3 px-6 text-sm leading-[160%] border border-brand rounded-full">
                    Load More
            </button>
          </div>
        {/* It's me */}
        <section>
          <Desc/>
        </section> 
        {/*Testimonial*/}
        <section>
          <Testimonials/>
        </section>
      </main>
    </>
  )
}
