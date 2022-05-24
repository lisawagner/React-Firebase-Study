import { useState } from 'react';
import './eventFormStyles.css'

export default function EventForm({ addEvent }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const resetForm = () => {
    setTitle('')
    setDate('')
  }

  const handleSubmit = (e) => {
    // prevent the default browser refresh
    e.preventDefault()
    // give new events a unique id
    const event = {
      title: title,
      date: date,
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
      <button>Submit</button>
      {/* <p>title - {title}, date - {date}</p>
      <p onClick={resetForm} >reset the form</p> */}
    </form>
  )
}
