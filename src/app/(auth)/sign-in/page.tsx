import { Metadata } from 'next';

import SignInForm from '@/components/SignInForm';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your account',
};

const SignPage = () => {
  return (
    <div className='w-full'>
      <SignInForm />
    </div>
  );
};

export default SignPage;
