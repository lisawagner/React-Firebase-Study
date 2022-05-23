import React from 'react'
import './modalStyles.css'

export default function Modal({children, handleModal}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleModal} >X</button>
      </div>
      
    </div>
  )
}
