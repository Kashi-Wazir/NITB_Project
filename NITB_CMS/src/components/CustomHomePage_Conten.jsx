// src/components/CustomHomePage_Content.jsx
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function CustomHomePage_Content() {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <main id='main'>
    <div className="custom-homepage-content">
      <h2>Welcome to the Custom Homepage</h2>
      <p>This is the custom homepage section of the admin dashboard.</p>

      <Button variant="primary" onClick={toggleModal}>
        Show More Info
      </Button>

      {/* Modal to show additional information */}
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Additional Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Here you can add settings or other content for customizing the homepage.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </main>
  );
}

export default CustomHomePage_Content;
