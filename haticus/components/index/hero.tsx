import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { settings } from '../../settings';
import { useState } from 'react';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='bg-gray-50'>
      <div className='relative overflow-hidden'>
        <div className='absolute inset-y-0 h-full w-full' aria-hidden='true'>
          <div className='relative h-full'>
            <svg
              className='absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full'
              width='404'
              height='784'
              fill='none'
              viewBox='0 0 404 784'>
              <defs>
                <pattern
                  id='e229dbec-10e9-49ee-8ec3-0286ca089edf'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'>
                  <rect
                    x='0'
                    y='0'
                    width='4'
                    height='4'
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width='404'
                height='784'
                fill='url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)'
              />
            </svg>
            <svg
              className='absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4'
              width='404'
              height='784'
              fill='none'
              viewBox='0 0 404 784'>
              <defs>
                <pattern
                  id='d2a68204-c383-44b1-b99f-42ccff4e5365'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'>
                  <rect
                    x='0'
                    y='0'
                    width='4'
                    height='4'
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width='404'
                height='784'
                fill='url(#d2a68204-c383-44b1-b99f-42ccff4e5365)'
              />
            </svg>
          </div>
        </div>

        <div className='relative pt-6 pb-16 sm:pb-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <nav
              className='relative flex items-center justify-between sm:h-10'
              aria-label='Global'>
              <div className='flex items-center flex-1 md:inset-y-0 md:left-0'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                <div className='DogeGardenLogoB'>
                  <Link href='/'>
                    <a>
                      <span className='sr-only'>{settings.name}</span>
                      <img
                        className='h-8 w-auto'
                        src={settings.headerLogo}
                        alt={`${settings.name} Logo`}
                      />
                    </a>
                  </Link>
                  </div>
                  <div className='-mr-2 flex items-center md:hidden'>
                    <button
                      type='button'
                      onClick={() => setMenuOpen(true)}
                      className='bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dcl'
                      aria-expanded='false'>
                      <span className='sr-only'>Open main menu</span>
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
                </div>
              </div>
              <div className='hidden md:flex md:space-x-10'>
                <Link href='/'>
                  <a className='font-medium text-gray-500 hover:text-gray-900'>
                    Home
                  </a>
                </Link>
                <Link href='https://wiki.dogehouse.xyz/'>
                  <a className='font-medium text-gray-500 hover:text-gray-900'>
                    Documentation
                  </a>
                </Link>
                <a
                  href='https://github.com/dogegarden'
                  target='_blank'
                  className='font-medium text-gray-500 hover:text-gray-900'>
                  GitHub
                </a>

                <a
                  href='https://discord.com/invite/pPaXCRrVrh'
                  target='_blank'
                  className='font-medium text-gray-500 hover:text-gray-900'>
                  Discord
                </a>
              </div>
            </nav>
          </div>

          {/*
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        */}
          <Transition
            show={menuOpen}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
              <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                <div className='px-5 pt-4 flex items-center justify-between'>
                  <div>
                    <Link href='/'>
                      <a>
                        <img
                          className='h-8 w-auto'
                          src={settings.headerLogo}
                          alt={`${settings.name} Logo`}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className='-mr-2'>
                    <button
                      type='button'
                      onClick={() => setMenuOpen(false)}
                      className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dcl'>
                      <span className='sr-only'>Close main menu</span>
                      {/* Heroicon name: outline/x */}
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
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                  <Link href='/'>
                    <a className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                      Home
                    </a>
                  </Link>
                  <Link href='https://wiki.dogehouse.xyz/'>
                    <a className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                      Documentation
                    </a>
                  </Link>
                  <a
                    href='https://github.com/dogegarden'
                    target='_blank'
                    className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                    GitHub Organization
                  </a>
                </div>
              </div>
            </div>
          </Transition>

          <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6'>
            <div className='text-center'>
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              <div className='providingToolsText'>
                <span className='block'>Providing tools</span>
              </div>
              <div className='forDogehouseText'>
                <span className='block text-dc'>for DogeHouse.tv</span>
              </div>
              </h1>
              <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              <div className='descText'>
                DogeGarden is the parent organization behind numerous tools
                <br /> for the popular chat platform, DogeHouse.tv.
              </div>
              </p>
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
            <div className='flex-1'></div>
            <div className='flex-1 w-full bg-ghc'></div>
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='previewImage'>
            <img
              className='relative rounded-lg shadow-lg'
              src='/images/preview.png'
              alt='App screenshot'
            />
          </div>
          </div>
        </div>
      </div>
      <div className='bg-ghc'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <h2 className='text-center text-gray-400 text-sm font-semibold uppercase tracking-wide'>
            Responsible for great community tools
          </h2>
          <div className='mt-8 flex flex-col lg:flex-row items-center justify-center gap-y-8 lg:gap-y-0 lg:gap-x-16'>
            <a
              href='https://github.com/dogegarden/dogehouse-api'
              target='_blank'>
              <img
                className='h-12'
                src='/images/dogehouse-api.svg'
                alt='DogeHouse API Logo'
              />
            </a>

            <a
              href='https://github.com/dogegarden/dogehouse.js'
              target='_blank'>
              <img
                className='h-12'
                src='/images/dogehouse.js.svg'
                alt='DogeHouse.js Logo'
              />
            </a>

            <a
              href='https://github.com/dogegarden/dogegarden-stats'
              target='_blank'>
              <img
                className='h-12'
                src='/images/dogegarden-stats.svg'
                alt='DogeGarden Stats Logo'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
