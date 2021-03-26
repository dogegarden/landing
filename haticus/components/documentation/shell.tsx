import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { settings } from '../../settings';
import { useState } from 'react';

const Shell = ({ children, title }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='h-screen flex overflow-hidden bg-gray-100'>
      <Transition show={menuOpen}>
        <div
          className='fixed inset-0 flex z-40 md:hidden'
          role='dialog'
          aria-modal='true'>
          <Transition.Child
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-lienar duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div
              className='fixed inset-0 bg-gray-600 bg-opacity-75'
              aria-hidden='true'></div>
          </Transition.Child>

          {/*
          Off-canvas menu, show/hide based on off-canvas menu state.
    
          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        */}
          <Transition.Child
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'>
            <div className='relative flex-1 flex flex-col max-w-xs w-full bg-ghc min-h-screen'>
              {/*
            Close button, show/hide based on off-canvas menu state.
    
            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          */}
              <Transition.Child
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'>
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Close sidebar</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className='h-6 w-6 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </Transition.Child>

              <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
                <div className='flex-shrink-0 flex items-center px-4'>
                  <Link href='/'>
                    <a>
                      <img
                        className='h-16 w-auto'
                        src={settings.favicon}
                        alt={`${settings.name} Logo`}
                      />
                    </a>
                  </Link>
                </div>
                <nav className='mt-5 px-2 space-y-1'>
                  {/* Current: "bg-ghcl text-white", Default: "text-gray-300 hover:bg-ghcl hover:text-white" */}
                  <Link href='/documentation'>
                    <a className='bg-ghcl text-white group flex items-center px-16 py-2 text-base font-medium rounded-md'>
                      {/* Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300" */}
                      {/* Heroicon name: outline/home */}
                      <svg
                        className='text-gray-300 mr-4 h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                        />
                      </svg>
                      Welcome
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14'>
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Transition>

      {/* Static sidebar for desktop */}
      <div className='hidden md:flex md:flex-shrink-0'>
        <div className='flex flex-col w-64'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col h-0 flex-1 bg-ghc'>
            <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
              <div className='flex items-center flex-shrink-0 px-4'>
                <Link href='/'>
                  <a>
                    <img
                      className='h-16 w-auto'
                      src={settings.favicon}
                      alt={`${settings.name} Logo`}
                    />
                  </a>
                </Link>
              </div>
              <nav className='mt-5 flex-1 px-2 bg-ghc space-y-1'>
                {/* Current: "bg-ghcl text-white", Default: "text-gray-300 hover:bg-ghcl hover:text-white" */}
                <Link href='/documentation'>
                  <a className='bg-ghcl text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'>
                    {/* Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300" */}
                    {/* Heroicon name: outline/home */}
                    <svg
                      className='text-gray-300 mr-3 h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                      />
                    </svg>
                    Welcome
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-0 flex-1 overflow-hidden'>
        <div className='md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3'>
          <button
            onClick={() => setMenuOpen(true)}
            className='-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dc'>
            <span className='sr-only'>Open sidebar</span>
            {/* Heroicon name: outline/menu */}
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
        <main
          className='flex-1 relative z-0 overflow-y-auto focus:outline-none'
          tabIndex={0}>
          <div className='py-6'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <h1 className='text-2xl font-semibold text-gray-900'>{title}</h1>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
              {/* Replace with your content */}
              <div className='py-4'>{children}</div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shell;
