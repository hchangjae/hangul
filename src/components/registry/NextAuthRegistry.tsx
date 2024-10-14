import dynamic from 'next/dynamic';
import { Session } from 'next-auth';
import { ReactNode } from 'react';

const useNextAuth = process.env.NEXTAUTH_URL && process.env.NEXTAUTH_SECRET

const SessionProvider = dynamic(() => import('next-auth/react').then((mod) => mod.SessionProvider), {
  ssr: !!useNextAuth,
});

type Props = {
  session: Session;
  children: ReactNode;
};

const NextAuthRegistry = (props: Props) => {
  const { session, children } = props;

  if (!useNextAuth) {
    return <>{children}</>;
  }

  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default NextAuthRegistry;
