import NextAuth from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { jwt as tjwt, Session } from '../../../interfaceSet/backendSet/backendIf';
import clientPromise from '../../db/lib/mongodb';
import { getJWToken } from '../../../interfaceSet/backendFuncSet/verifyFunc';
const jwt = require('jsonwebtoken');


export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET as string,
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    })
  ],
  jwt: {
    maxAge: 48 * 60 * 60,
  },
  session: {
    strategy: 'jwt',
    maxAge: 48 * 60 * 60,
  },
  callbacks: {
    async jwt({ token }: tjwt) {
      return token;
    },
    async session({ session, user, token }: Session) {
      const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string;
      const AccessToken = await getJWToken(session.user.name, session.user.email, jwtSecret);
      session.token = AccessToken;
      session.logState = true;
      return session
    }
  }


})

