import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

const Userpage = () => {
  const { data: session } = useSession()
  return (
    <div className='py-[100px]'>
      <div className='mx-[15px] lg:mx-[200px] my-[30px]'>
        <a
          class="relative block rounded-xl border border-gray-100 p-8 shadow-xl"
          href=""
        >
          <span
            class="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
          >
            {session.user.email}
          </span>

          <div class="mt-4 text-gray-500 sm:pr-8">
            <span>
              <div className="avatar">
                <div className=" rounded-full ">
                  <Image alt={session.user.namec + 'profile image'} height={70} width={70} src={session.user.image} />
                </div>
              </div>
            </span>

            <h3 class="mt-4  font-semibold text-lg text-gray-900 font-two"><span className=' text-xl text-one'>{session.user.name}</span> </h3>

            {/* <p class="mt-2 hidden text-sm sm:block">
              You can manage phone, email and chat conversations all from a single
              mailbox.
            </p> */}
          </div>
        </a>

      </div>
      <div className='mx-[15px] lg:mx-[200px] my-[30px] font-two'>
        <a
          href="#"
          class="relative block overflow-hidden rounded-lg border-orange-300  border-[2px] p-8"
        >
          <span
            class="absolute inset-x-0 bottom-0 h-2 plus-col"
          ></span>

          <div class="justify-between sm:flex">
            <div>
              <h3 class="text-xl font-bold text-gray-900">
                150+ Saas Solutions
              </h3>

              <p class="mt-1 text-xs font-medium text-gray-600">For
                <span className='mx-1 text-orange-500'>
                  <ReactTypingEffect
                    typingDelay={400}
                    speed={60}
                    eraseSpeed={30}
                    eraseDelay={1800}
                    text={[
                      `Developers`,
                      `Designers`,
                      `indieMaker 🥷`,
                      `Marketers`,
                      `Content Creators`,
                    ]}
                  />
                </span>
              </p>
            </div>

            {/* <div class="ml-3 hidden flex-shrink-0 sm:block">
              <Image
                height={40}
                width={40}
                alt="Paul Clapton"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="h-16 w-16 rounded-lg object-cover shadow-sm"
              />
            </div> */}
          </div>

          <div class="mt-4 sm:pr-8">
            <p class="text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
              provident a, ipsa maiores deleniti consectetur nobis et eaque.
            </p>
          </div>

          {/*<div class="mt-6 flex">
            <div class="flex flex-col-reverse">
              <dt class="text-sm font-medium text-gray-600">Published</dt>
              <dd class="text-xs text-gray-500">31st June, 2021</dd>
            </div>

            <div class="ml-3 flex flex-col-reverse sm:ml-6">
              <dt class="text-sm font-medium text-gray-600">Reading time</dt>
              <dd class="text-xs text-gray-500">3 minute</dd>
            </div>
          </div> */}
        </a>
      </div>
      <div className='mx-[15px] lg:mx-[200px] my-[30px] font-two'>
        <a
          href=""
          class="group flex flex-col justify-between border-[2px] rounded-lg border-violet-400  bg-white p-8 shadow-xl transition-shadow hover:shadow-lg"
        >
          <div>
            <h3 class="text-2xl font-bold text-violet-500 tracking-wide">#buildinpublic</h3>
            <div class="mt-4 border-t-2 border-indigo-100 pt-2">
              <p class="text-sm font-medium uppercase tracking-wide text-gray-500">
                Build with 100+ Builders, Content Creator
              </p>
            </div>
          </div>

          <div class="mt-8 inline-flex items-center text-violet-600">
            <Link href="/twitter">
              <p class="text-lg font-medium inline-block hover:underline">Connnect with them -&gt;</p>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-6 w-6 transform transition-transform group-hover:translate-x-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg> */}
            </Link>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Userpage