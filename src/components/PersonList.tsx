import type { Name } from "./types/Person.types"

type PersonListProps = {
   names: Name[]
}
export const PersonList = ({names}: PersonListProps) => {
   return(
      <div>
         {
            names.map((name, i) => (<p key={i}>{name.first} {name.last}</p>))
         }
      </div>
   )
}