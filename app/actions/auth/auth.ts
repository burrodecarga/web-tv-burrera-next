'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { success } from "zod"

export async function login(formData:{email: string, password: string}) {
  const supabase = await createClient()
  const { error,data } = await supabase.auth.signInWithPassword(formData)

  if (error) {
   return {
    success: false,
    message: error.message
   }
  }
  return {
    success: true,
    message: "Login successful, Usuario autenticado con éxito",
    data
  }
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath("/")
  redirect("/")     
}

export async function register(formData:{username: string, email: string, password: string}) {
  const supabase = await createClient()
  const { error,data } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {  data: { username: formData.username } }
  })   

  if (error) {
    return {
      success: false,
      message: error.message
    }
  }

  return {
    success: true,
    message: "Registration successful, Usuario registrado con éxito",
    data
  }
}   