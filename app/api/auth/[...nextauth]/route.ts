import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import dbConnect from "@/utils/db"
import User from "@/models/User"

import bcrypt from "bcryptjs"
export const authOptions : NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        id:"credentials",
        name: "Credentials",
        credentials: {
            email: {label: "email", type: "text" },
            password: {label: "password", type: "password"}
        },
        async authorize(credentials : any) {
            await dbConnect()
            try{
                const user = await User.findOne({email: credentials.email})
                if(user) {
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                    if (isPasswordCorrect) {
                        return user
                    }
                }
            }catch(err : any) {
                throw new Error(err)
            }
            
        },
    })

    // GithubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    // ...add more providers here
  ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }