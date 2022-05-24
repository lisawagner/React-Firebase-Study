import { useState } from 'react';
import './eventFormStyles.css'

export default function EventForm({ addEvent }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('saskatoon')

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('saskatoon')
  }

  const handleSubmit = (e) => {
    // prevent the default browser refresh
    e.preventDefault()
    // give new events a unique id
    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000)
    }
    addEvent(event)
    resetForm()
  }

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value) } />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        <span>Event location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="saskatoon">Saskatoon</option>
          <option value="burnaby">Burnaby</option>
          <option value="quebec">Quebec</option>

        </select>
      </label>
      <button>Submit</button>
      {/* <p>title - {title}, date - {date}</p>
      <p onClick={resetForm} >reset the form</p> */}
    </form>
  )
}
