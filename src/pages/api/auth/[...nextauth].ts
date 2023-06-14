import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { AuthAdmin } from '../../../types/AuthAdmin'

interface User {
  id: string
  email: string
  name: string
  password: string
}

const user: User = {
  id: '1',
  email: 'matheus@dev.com',
  name: 'Matheus',
  password: '123',
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: 'credentials',
      credentials: {
        email: { label: 'E-mail', type: 'text' },
        password: { label: 'Senha', type: 'password' },
      },
      authorize: async (credentials, req) => {
        if (credentials && credentials.email && credentials.password) {
          if (
            credentials.email.toLocaleLowerCase() ===
              user.email.toLocaleLowerCase() &&
            credentials.password === user.password
          ) {
            return user
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token.user = user
      return token
    },
    session: async ({ session, token }) => {
      if (token) session.user = token.user as AuthAdmin
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
}

export default NextAuth(authOptions)
