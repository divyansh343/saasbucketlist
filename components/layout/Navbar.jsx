import Image from 'next/image';
import { Transition } from "@headlessui/react";
import React, { useState } from 'react'
import Link from 'next/link';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <nav className="bg-[#18ff46] ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               {/* <Image
//                 className="h-8 w-8"
//                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                 alt="Workflow"
//                 width={50}
//                 height={50}
//               /> */}
//               <p className='font-medium text-[20px]'>SaasBucketList</p>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 <a
//                   href="#"
//                   className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Team
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Projects
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Calendar
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Reports
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       <Transition
//         show={isOpen}
//         enter="transition ease-out duration-100 transform"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="transition ease-in duration-75 transform"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         {(ref) => (
//           <div className="md:hidden" id="mobile-menu">
//             <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <a
//                 href="#"
//                 className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Dashboard
//               </a>

//               <a
//                 href="#"
//                 className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Team
//               </a>

//               <a
//                 href="#"
//                 className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Projects
//               </a>

//               <a
//                 href="#"
//                 className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Calendar
//               </a>

//               <a
//                 href="#"
//                 className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Reports
//               </a>
//             </div>
//           </div>
//         )}
//       </Transition>
//     </nav>
//   )
// }



const Navbar = () => {
  return (
    <div className="navbar fixed top-0  z-10  bg-gradient-to-r from-orange-400 to-rose-400">
      <div className="flex-1">
        <Link href="/">
          <p className="btn btn-ghost normal-case text-xl">SaasBucket [ List ]</p>
        </Link>
      
        <Link href="/saas" className=''>
          <p className="btn btn-ghost normal-case  text-xl">Saas</p>
        </Link>
      </div>
      <div className="flex-none">
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image alt='' height={50} width={50} src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar