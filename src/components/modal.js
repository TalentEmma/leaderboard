// import React from "react";
// import "./modal.css";

// function Modal({ setOpenModal }) {
//   return (
//     <div className="modalBackground">
//       <div className="modalContainer">
//         <div className="titleCloseBtn">
//           <button
//             onClick={() => {
//               setOpenModal(false);
//             }}
//           >
//             X
//           </button>
//         </div>
//         <div className="title">
//           <h1>Are You Sure You Want to Continue?</h1>
//         </div>
//         <div className="body">
//           <p>The next page looks amazing. Hope you want to go there!</p>
//         </div>
//         <div className="footer">
//           <button
//             onClick={() => {
//               setOpenModal(false);
//             }}
//             id="cancelBtn"
//           >
//             Cancel
//           </button>
//           <button>Continue</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        view
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title> <div className="modalContainer">
          <img className='person' src={props.img} alt="" />
          <h2 >{props.name}</h2>
          <h3 variant="outline-danger">{props.score}</h3>
            </div> </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.about}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
    
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;


