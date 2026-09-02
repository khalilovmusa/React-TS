import { LogInText } from "./LogInText"

type GreetProps = {
   name: string
   messageCount: number
   isLoggedIn: boolean
}

export const Greet = ({name, messageCount, isLoggedIn}: GreetProps) => {
   return(
      <div>
         <h2>
            {
               isLoggedIn ? `Welcome back ${name}! You have ${messageCount} unread messages` : <LogInText/>
            }
         </h2>
      </div>
   )
}