import Image from 'next/image'
import React from 'react'
import Hero from './Hero'
import SaasSection from './SaasSection'
import Testimonials from './Testimonials'
import paper from '../../assets/images/paper.png'
import dev from '../../assets/images/dev.png'
import create from '../../assets/images/create.png'
const LandingPage = () => {
  return (
    <>
      <div className="mt-16 font-two">
        <Hero />
        <SaasSection />
        <div>
          <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div class="max-w-xl mx-auto text-center">
                <div class="inline-flex px-4 py-1.5 mx-auto rounded-full nav-col">
                  <p class="text-xs font-semibold tracking-widest text-white uppercase">Indiemakers, developers, marketer</p>
                </div>
                <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Join 99+ indieMakers who are building in public</h2>

                {/* <p class="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> */}
              </div>

              <div class="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
                <div class="transition-all duration-200 bg-white hover:shadow-xl">
                  <div class="py-10 px-9">
                   <Image src={paper} height={70} width={70} alt='paper boat' />
                    <h3 class="mt-8 text-lg font-semibold text-black">Indimakers & builders</h3>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                  </div>
                </div>

                <div class="transition-all duration-200 bg-white hover:shadow-xl">
                  <div class="py-10 px-9">
                  <Image src={dev} height={70} width={70} alt='paper boat' />

                    <h3 class="mt-8 text-lg font-semibold text-black">Developer & Marketers</h3>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                  </div>
                </div>

                <div class="transition-all duration-200 bg-white hover:shadow-xl">
                  <div class="py-10 px-9">
                  <Image src={create} height={70} width={70} alt='paper boat' />
                    <h3 class="mt-8 text-lg font-semibold text-black">Professional creators</h3>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Testimonials />
        <div className='border-t-2'>
          <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">80+ Makers alreay joined the club</h2>
                {/* <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> */}
              </div>

              <form action="#" method="POST" class="max-w-xl mx-auto mt-12">
                <div class="flex flex-col items-center sm:flex-row sm:justify-center">
                  <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
                    <label for="email" class="sr-only"></label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email address"
                      class="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-md caret-indigo-600 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                      required
                    />
                  </div>

                  <button type="submit" class="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-[#1d1d1f] border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto ">
                    Join indieMake Club
                    <svg class="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </form>

              <div class="flex items-center justify-center px-8 mt-8 sm:px-0">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span class="ml-2 text-sm text-gray-600"> Your data is complely secured with us. We don’t share with anyone. </span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )

}

export default LandingPage