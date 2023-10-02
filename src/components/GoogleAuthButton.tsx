import { FC } from 'react';
import { Button } from './ui/Button';
import { signIn } from 'next-auth/react';
interface GoogleAuthButtonProps {
  children: React.ReactNode;
  disabled: boolean;
}

const GoogleAuthButton: FC<GoogleAuthButtonProps> = ({
  children,
  disabled,
}) => {
  const onLoginWithOAuth = () => {
    // signIn('google', { redirect: false });
    signIn('google');
    console.log('Google sign in done');
  };

  return (
    <Button
      className='w-full'
      onClick={onLoginWithOAuth}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default GoogleAuthButton;
