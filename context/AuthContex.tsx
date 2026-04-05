'use client'
import { getUser } from '@/app/actions/auth/get-user'
import { User } from '@/interfaces/user'
import { createClient } from '@/lib/supabase/client'
import { createContext,useContext, useState, useEffect } from 'react'
import { set } from 'zod'

interface AuthContextType {
  user:User|null
  isLoading:boolean
  getUserData:()=>Promise<void>
}

export const AuthContext = createContext<AuthContextType|undefined>(undefined)

export function AuthProvider({children}:{children:React.ReactNode}) {
  const [user, setUser] = useState<User|null>(null)
  const [isLoading, setIsLoading] = useState(true)
    const getUserData = async () => {
        setIsLoading(true)
        try {
            const userData = await getUser()
            if(userData) {
            setUser(userData)}
        }
        catch(error) {
            console.error('Error fetching user data:', error)
        }
        finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {   
        getUserData()
    },[])

   const authState = async () => {
    const supabase = createClient()

    supabase.auth.onAuthStateChange((event, session) => {
        const event_type=[
            'INITIAL_SESSION',
            'USER_UPDATED',
            'TOKEN_REVOKED',
            'PASSWORD_RECOVERY',
            'SIGNED_IN',
            'TOKEN_REFRESHED',
            'SIGNED_OUT'    

        ]

        if (event_type.includes(event)) {
            getUserData()
        } else  {
            setUser(null)
        }   })
   }

        useEffect(() => {
            authState()
        },[])

  return (
    <AuthContext.Provider value={{user,isLoading,getUserData}}>
        {children}
    </AuthContext.Provider>
  ) 
}

export const useAuth = () => {
  const context = useContext(AuthContext)
    if (!context) { 
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}