import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='bg-ghc min-h-screen flex items-center justify-center'>
      <div>
        <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-dc sm:text-4xl'>
            <span className='block'>This is awkward...</span>
            <span className='block'>We can't find that page.</span>
          </h2>
          <Link href='/'>
            <a className='text-ghc mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-dc-600 bg-dc hover:bg-dcd sm:w-auto'>
              Return home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
