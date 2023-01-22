import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
// import { useRouter } from 'next/router'
// import { useSession } from 'next-auth/react'
const Hero = () => {

  // const { data: session, status } = useSession()
  // const router = useRouter()

  // if (status === "authenticated") {
  //   router.push('/auth')
  // } else {
  
  return (
    <div>
      <div class="theme-col">

        <section class="py-10 sm:py-16 lg:py-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  Build product with
                </h1>
                  <div class="relative inline-block">
                    <p class="absolute inset-x-0 bottom-0 border-b-[30px] border-orange-300"></p>
                    <h1 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      <ReactTypingEffect
                      typingDelay={400}
                      speed={60}
                      eraseSpeed={30}
                      eraseDelay={1800}
                      text={[
                        `Developer`,
                        `Designer`,
                        `indieMaker 🥷`,
                        `Marketer`,
                        `Content Creator`,
                      ]}
                    /></h1>
                  </div>

                <p class="mt-8 text-base text-black sm:text-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <Link href="/onboarding" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 nav-col rounded-[8px]" role="button"> Start exploring </Link>

                  {/* <a href="#" title="" class="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                    <svg class="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path fill="#F97316" stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch video
                  </a> */}
                </div>
              </div>

              <div>
                <Image height={500} width={500} class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
} 

export default Hero