'use client';

import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/Button';

const SignOutButton = () => {
  const onSignOut = () => signOut();

  return <Button onClick={onSignOut}>Sign Out</Button>;
};

export default SignOutButton;
