import './App.css'
import { Greet } from './components/Greet'
import { Header } from './components/Header'
import { Oscar } from './components/Oscar'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Wonder',
      last: 'Woman'
    },
  ]

  return (
    <>
      <Greet name="Guts" messageCount={100} isLoggedIn={true} />
      <Greet name="Guts" messageCount={100} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status={'loading'} />
      <Status status={'success'} />
      <Status status={'error'} />
      <Header>
        Placeholder text
      </Header>
      <Oscar>
        <Header>
          Bruh
        </Header>
      </Oscar>
      <Greet name='Eliot' isLoggedIn={true} />
    </>
  )
}

export default App
