import './App.css'
import { useState } from 'react'
import Title from './components/Title'

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "The Last Wish", date: 1993, id: 1},
    {title: "Sword of Destiny", date: 1992, id: 2},
    {title: "Blood of Elves", date: 1994, id: 3}
  ])

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  return (
    <div className="App">
      <Title />
      
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
