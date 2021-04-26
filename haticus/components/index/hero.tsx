import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { settings } from '../../settings';
import { useState } from 'react';
// import ReactDOM from 'react-dom';

// import './App.css'
//data:image/jpeg;base64,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
const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // backgroundimage=;   
    <div style={{ 
      backgroundImage: `url("data:image/jpeg;base64,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")` 
    }}>
    <div className='bg-gray-50'>
      <div className='relative overflow-hidden'>
        <div className='absolute inset-y-0 h-full w-full' aria-hidden='true'>
          <div className='relative h-full'>
            {/* backgroundimage=`url` */}
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
                <Link href='https://wiki.dogegarden.net/'>
                  <a className='font-medium text-gray-500 hover:text-gray-900'>
                    Documentation
                  </a>
                </Link>

                <a
                  href='https://stats.dogegarden.net'
                  target='_blank'
                  className='font-medium text-gray-500 hover:text-gray-900'>
                  Tracker 
                </a>

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
              <div className='rounded-lg shadow-md bg-black ring-1 ring-black ring-opacity-5 overflow-hidden'>
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
                      className='bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dcl'>
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
                  <Link href='https://wiki.dogegarden.net/'>
                    <a className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                      Documentation
                    </a>
                  </Link>
                  <a
                    href='https://github.com/dogegarden'
                    target='_blank'
                    className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                    GitHub
                  </a>

                  <a
                    href='https://discord.com/invite/pPaXCRrVrh'
                    target='_blank'
                    className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                    Discord
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
              <div className='descText'>
              <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                DogeGarden is the parent organization behind numerous tools
                <br /> for the popular chat platform, DogeHouse.tv.
              </p>
             </div>
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
    </div> 
  );
};



export default Hero;
