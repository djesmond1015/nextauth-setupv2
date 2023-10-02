import SignUpForm from '@/components/SignUpForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign up for an account',
};

const SignUpPage = () => {
  return (
    <div className='w-full'>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
