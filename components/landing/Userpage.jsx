import Image from 'next/image'
import React from 'react'

const Userpage = () => {
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
            4.3
          </span>

          <div class="mt-4 text-gray-500 sm:pr-8">
            <svg
              class="h-8 w-8 sm:h-10 sm:w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>

            <h3 class="mt-4 text-xl font-bold text-gray-900">Science of Chemistry</h3>

            <p class="mt-2 hidden text-sm sm:block">
              You can manage phone, email and chat conversations all from a single
              mailbox.
            </p>
          </div>
        </a>

      </div>
      <div className='mx-[15px] lg:mx-[200px] my-[30px]'>
        <a
          href="#"
          class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
        >
          <span
            class="absolute inset-x-0 bottom-0 h-2 plus-col"
          ></span>

          <div class="justify-between sm:flex">
            <div>
              <h3 class="text-xl font-bold text-gray-900">
                Building a SaaS product as a software developer
              </h3>

              <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
            </div>

            <div class="ml-3 hidden flex-shrink-0 sm:block">
              <Image
                height={40}
                width={40}
                alt="Paul Clapton"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="h-16 w-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>

          <div class="mt-4 sm:pr-8">
            <p class="text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
              provident a, ipsa maiores deleniti consectetur nobis et eaque.
            </p>
          </div>

          <dl class="mt-6 flex">
            <div class="flex flex-col-reverse">
              <dt class="text-sm font-medium text-gray-600">Published</dt>
              <dd class="text-xs text-gray-500">31st June, 2021</dd>
            </div>

            <div class="ml-3 flex flex-col-reverse sm:ml-6">
              <dt class="text-sm font-medium text-gray-600">Reading time</dt>
              <dd class="text-xs text-gray-500">3 minute</dd>
            </div>
          </dl>
        </a>
      </div>
    </div>
  )
}

export default Userpage