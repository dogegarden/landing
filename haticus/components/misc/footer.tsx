import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";



const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
            
          <a
            href='https://github.com/dogegarden'
            target='_blank'
            className='text-gray-500 hover:text-gray-600'>
            <span className='sr-only'>GitHub</span>
            <svg
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'>
              <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                clipRule='evenodd'
              />
            </svg>
          </a>
          <a
            href='https://discord.com/invite/pPaXCRrVrh'
            target='_blank'
            className='discord-invite-join-butto'>
            <span className='sr-only'>Discord</span>
            {/* <svg
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'>
              <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                clipRule='evenodd'
              />
            </svg> */}

              <img src="data:image/png;base64,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" alt="Discord" width="25" height="25" />
          </a>



        </div>
        <div className='mt-8 md:mt-0 md:order-1'>
          <p className='text-center text-base text-gray-500'>
            &copy; 2021 DogeGarden. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
