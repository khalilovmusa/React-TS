import type { PersonProps } from "./types/Person.types"

export const Person = ({name}: PersonProps) => {
   return <div>{name.first} {name.last}</div>
}