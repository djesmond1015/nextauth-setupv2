import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';

import { getSession } from '@/lib/auth/options';
import SignOutButton from '@/components/SignOutButton';

const HomePage = async () => {
  const session = await getSession();

  return (
    <div>
      <h1 className='text-4xl'>Home</h1>
      {session?.user ? (
        <SignOutButton />
      ) : (
        <Link
          href='/admin'
          className={buttonVariants()}
        >
          {' '}
          Navigate to Admin Page
        </Link>
      )}
    </div>
  );
};

export default HomePage;
