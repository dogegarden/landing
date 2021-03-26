import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='bg-dc-700 min-h-screen flex items-center justify-center'>
      <div>
        <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
            <span className='block'>This is awkward...</span>
            <span className='block'>We can't find that page.</span>
          </h2>
          <p className='mt-4 text-lg leading-6 text-dc-200'>
            If you believe this is a mistake, please try again, or contact that
            site administrator.
          </p>
          <Link href='/'>
            <a className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-dc-600 bg-white hover:bg-dc-50 sm:w-auto'>
              Return home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
