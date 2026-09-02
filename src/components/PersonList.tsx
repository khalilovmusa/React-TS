type PersonListProps = {
   names: {
      first: string
      last: string
   }[]
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