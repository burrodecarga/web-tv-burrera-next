import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LayoutGrid } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function DashboardPage() {
  return (
    <>

      <nav className='px-6 py-4 border-b flex items-center justify-between '>
        <div className="flex items-center text-xl font-extrabold tracking-tight gap-3">
          <LayoutGrid size={32} />
          Gestor de Pollas
        </div>

        <Link href="/profile" className="text-sm font-medium transition-colors hover:text-primary">
         <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback> 
          <AvatarBadge className="bg-green-100 dark:bg-green-100 text-amber-50" title='Edwin Henriquez'/>
      </Avatar> 
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