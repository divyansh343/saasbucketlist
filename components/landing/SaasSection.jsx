import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SaasSection = () => {
  return (
    <section class="py-10 theme-col sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div>
            <Image height={350} width={350} class="w-full max-w-md mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/2/services-icons.png" alt="" />
          </div>

          <div class="text-center lg:text-left">
            <h2 class="text-3xl font-bold tracking-wide text-black sm:text-4xl lg:text-5xl"> 150+ Handpicked tools and services for Makers.</h2>
            <p class="mt-6 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <Link href="/onboarding">
              <p title="" class="inline-flex items-center justify-center px-8 font-two py-4 font-semibold text-white transition-all duration-200 bg-[#1d1d1f]
            bg-opacity-90 rounded-md mt-9 " role="button"> Check all 150+ apps </p>
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default SaasSection