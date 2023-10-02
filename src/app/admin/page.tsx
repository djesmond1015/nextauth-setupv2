import { getSession } from '@/lib/auth/options';
import Image from 'next/image';

const AdminPage = async () => {
  const session = await getSession();
  console.log('Session From Admin Page', session);

  if (session?.user) {
    return (
      <div>
        <h1 className='text-4xl'>
          Welcome to Admin Page - {session.user.name}
        </h1>
        <h1 className='text-4xl'>
          Welcome to Admin Page - {session.user.message}
        </h1>
        {session.user.image ? (
          <Image
            src={session?.user?.image}
            alt='User Image'
          />
        ) : (
          <h2 className='text-xl mt-3'>
            {session.user.name} doesn&apos;t have picture
          </h2>
        )}
      </div>
    );
  }

  return null;
};

export default AdminPage;
