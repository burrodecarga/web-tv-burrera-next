'use client'
 import { AvatarBadge } from "@/components/user/AvatarBadge" 
import { useAuth } from '@/context/AuthContex'
import { LayoutGrid, PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function DashboardPage() {
  const {user}= useAuth()
  return (
    <>

      <nav className='px-6 py-4 border-b flex items-center justify-between '>
        <div className="flex items-center text-xl font-extrabold tracking-tight gap-3">
          <LayoutGrid size={32} />
          Gestor de Pollas
        </div>

        <Link href="/profile" className="flex-row text-sm font-medium transition-colors hover:text-primary">
        {user&&<AvatarBadge name={user?.username}
        avatar_url={user.avatar_url||''}
        />}
      </Link>
      </nav>



      {/* <form action="api/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form> */}

    </>

  )
}

export default DashboardPage