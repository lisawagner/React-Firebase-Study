import './App.css'
import React, { useState } from 'react'
import Title from './components/Title/Title'
import Modal from './components/Modal/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "The Last Wish", date: 1993, id: 1},
    {title: "Sword of Destiny", date: 1992, id: 2},
    {title: "Blood of Elves", date: 1994, id: 3}
  ])

  console.log(showModal);

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
    console.log(id);
  }

  const handleModal = () => {
    setShowModal(!showModal)
  }

  const subtitle = "Everything in Chronological Order"

  return (
    <div className="App">
      <Title title="The Witcher Timeline" subtitle={subtitle} />

      <div className='secret-btn'>
        {/* <button onClick={handleModal}>Top Secret</button> */}
        <button onClick={() => setShowModal(true)}>Top Secret</button>
      </div>
      
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
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </React.Fragment>
      ))}
      {showModal && <Modal handleModal={handleModal} >
        <h2>The Witcher Season 3 - SPOILER ALERT!!</h2>
        <p>Geralt and Yen Will Be .... Co-Parenting?!!</p>
      </Modal>}
      {/* {showModal && <Modal handleModal={handleModal}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis, cupiditate, eos possimus eveniet dolorum aperiam officiis, vero repellendus modi maxime laborum nostrum libero! Quisquam, soluta, dicta quo placeat ad iste fuga possimus minima sunt dolores delectus doloribus eligendi. Ipsum illum dicta unde quae repellat?</p>
      </Modal>} */}
    </div>
  );
}

export default App;
