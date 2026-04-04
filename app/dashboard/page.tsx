import React from 'react'

function DashboardPage() {
  return (
    <div>DashboardPage

      <form action="api/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
    </div>

  )
}

export default DashboardPage