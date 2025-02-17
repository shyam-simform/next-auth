"use server";
import * as z from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "../../schema";
import { db } from "@/lib/db";
import { getUserByEmail } from "../../data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  console.log(values);

  if (!validatedFields.success) {
    return { error: "Invalidate fields" };
  }

  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email is already in use" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: Send a verification email

  return { success: "User Created" };
};
