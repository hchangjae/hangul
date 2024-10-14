import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

const isNextAuthOn = process.env.NEXTAUTH_URL && process.env.NEXTAUTH_SECRET

type Props = {
  session: Session;
  children: ReactNode;
};

const NextAuthRegistry = (props: Props) => {
  const { session, children } = props;
  
  if (!isNextAuthOn) {
    return <>{children}</>;
  }

  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default NextAuthRegistry;
