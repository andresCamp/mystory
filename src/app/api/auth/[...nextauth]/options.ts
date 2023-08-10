import type { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook"
import AppleProvider from "next-auth/providers/apple"
import { compare } from "bcrypt";
import { prisma } from '../../../../../lib/prisma'

export const options: NextAuthOptions = {
    // adapter: PrismaAdapter(prisma),
    providers: [
        // AppleProvider({
        //     clientId: process.env.APPLE_ID as string,
        //     clientSecret: process.env.APPLE_SECRET as string,
        //   }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
          }),
         
        // EmailProvider({
        //     server: process.env.EMAIL_SERVER,
        //     from: process.env.EMAIL_FROM
        // }),
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                email: {
                    label: "Email:",
                    type: "email",
                    placeholder: "hello@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                },
        },
            async authorize(credentials) {
                // This is where you retrieve user data from your database to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                if(!credentials?.email || !credentials?.password) {
                    return null
                }

                
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                // console.log('User:', {user});


                if(!user){
                    return null
                }

                const isPasswordValid = await compare(
                    credentials.password,
                    user.password
                )

                if(!isPasswordValid) {
                    return null
                }

                return { //grab info from the database in here
                    id: user.id + '',
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    randomKey: 'hey cool' //to show real data base info, add user.foo
                }

            }
        })
    ],
    callbacks: {
        session: ({ session, token}) => {
            console.log('Session Callback', {session, token})
            return { //add arbitrary properties to the session that you want to have commonly used throughout the app
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey
                }
            }
            return session
        },
        jwt: ({ token, user }) => {
            console.log('JWT Callback', {token, user})
            if(user){
                const u = user as unknown as any //use this flow instead of normal token to pass in special keys
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey
                }
            }
            return token
        }
    }
}