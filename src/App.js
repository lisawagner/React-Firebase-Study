import './App.css'
import React, { useState } from 'react'
import Title from './components/Title/Title'
import Modal from './components/Modal/Modal'
import EventList from './components/EventList/EventList'
import EventForm from './components/EventForm/EventForm'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    // {title: "The Last Wish", date: 1993, id: 1},
    // {title: "Sword of Destiny", date: 1992, id: 2},
    // {title: "Blood of Elves", date: 1994, id: 3}
  ])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
    console.log(id);
  }

  // const handleModal = () => {
  //   setShowModal(!showModal)
  // }

  const subtitle = "Everything in Chronological Order"

  return (
    <div className="App">
      <Title title="The Witcher Timeline" subtitle={subtitle} />

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
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal isSalesModal={true}>
          <EventForm addEvent={addEvent} />
        </Modal>
        // <Modal handleModal={handleModal} isSalesModal={true} >
        //   <h2>The Witcher Season 3 - SPOILER ALERT!!</h2>
        //   <p>Geralt and Yen Will Be .... Co-Parenting?!!</p>
        // </Modal>
        )}
      {/* {showModal && <Modal handleModal={handleModal}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis, cupiditate, eos possimus eveniet dolorum aperiam officiis, vero repellendus modi maxime laborum nostrum libero! Quisquam, soluta, dicta quo placeat ad iste fuga possimus minima sunt dolores delectus doloribus eligendi. Ipsum illum dicta unde quae repellat?</p>
      </Modal>} */}

<div className='secret-btn'>
        {/* <button onClick={handleModal}>Top Secret</button> */}
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
