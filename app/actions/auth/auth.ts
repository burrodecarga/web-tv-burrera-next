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


export async function recoverPassword(formData:{ email: string}) {
  const supabase = await createClient()
  const { error,data } = await supabase.auth.resetPasswordForEmail(formData.email)   

  if (error) {
    return {
      success: false,
      message: error.message
    }
  }

  return {
    success: true,
    message: "Correo de recuperación enviado con éxito",
    data
  }
}   

export async function updatePassword(formData:{password: string}) {
  const supabase = await createClient()
  const { error,data } = await supabase.auth.updateUser({ password: formData.password })   

  if (error) {
    return {
      success: false,
      message: error.message
    }
  }

  return {
    success: true,
    message: "Contraseña actualizada con éxito",
    data
  }
}
