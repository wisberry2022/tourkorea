import { Account, Profile, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { AdapterUser } from 'next-auth/adapters';

export interface jwt {
  token: JWT;
  account?: Account | null | undefined;
  profile?: Profile | undefined;
}

export interface Session {
  session?: any;
  token: JWT | null | string;
  user?: User | AdapterUser
}