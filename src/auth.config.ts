import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "../schema";
import { getUserByEmail } from "../data/user";
import bcrypt from "bcryptjs";
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    // Credentials({
    //   async authorize(credentials) {
    //     const validatedFileds = LoginSchema.safeParse(credentials);
    //     if (validatedFileds.success) {
    //       const { email, password } = validatedFileds.data;
    //       console.log(email, "email from auth.config");
    //       const user = await getUserByEmail(email);
    //       console.log("user by email", user);
    //       if (!user || user.password) {
    //         return null;
    //       }
    //       const passwordMatch = await bcrypt.compare(
    //         password,
    //         user.password ?? ""
    //       );
    //       if (passwordMatch) {
    //         return user;
    //       }
    //     }
    //     return null;
    //   },
    // }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
