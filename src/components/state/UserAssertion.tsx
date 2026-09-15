import { useState } from 'react'

type AuthUser = {
   name: string
   email: string
}

export const UserAssertion = () => {
   const [ user, setUser ] = useState<AuthUser>({} as AuthUser)

   const handleLogin = () => {
      setUser({
         name: 'eliot',
         email: 'whoami@hackvisits.org'
      })
   }

   return(
      <div>
         <button onClick={handleLogin}>
            Log In
         </button>
         <p>User name is: {user.name}</p>
         <p>User email is: {user.email}</p>
      </div>
   )
}