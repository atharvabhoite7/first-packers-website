import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import  CredentialsProvider  from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";
import Users from "../../../models/googleAuthSchema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      async authorize (credentials, req){
        connectMongo().catch(error => { error: "Connection Failed"})

        // check user existence
        const result = await Users.findOne({email: credentials.email})
        if(!result){
          throw new Error ("No user with this email found please Sign Up");
        }

        // compare input and saved password
        const checkPassword = await compare(credentials.password , result.password);

        if(!checkPassword || result.email !== credentials.email){
          throw new Error("Incorrect password or Email");
        }

        return result;
      }
    })
  ],
});
