import React from 'react'
//import classes from './index.module.css'
import { Modal } from 'react-bootstrap'
import { Col, Button } from 'react-bootstrap'

interface Iprops {
  open: boolean,
  children: React.ReactElement,
  title: string,
  handleClose: () => void
}

const ModalDisplay: React.FC<Iprops> = ({ handleClose, open, children, title }) => {



  return (

    <>

      <Modal
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header style={{
          color: 'white', backgroundColor: '#2f5561'
        }} >
          <Modal.Title >{title}</Modal.Title>

        </Modal.Header>
        <Modal.Body >
          {children}

        </Modal.Body>
        <Modal.Footer>
          <Col md={12}>
            <Button
              variant='danger'
              style={{ float: "left" }}
              onClick={handleClose}
            >
              {"<<<"} Return
            </Button>
            <Button
              onClick={() => window.print()}
              style={{
                float: "right",
              }}>
              Print this page
            </Button>
          </Col>
        </Modal.Footer>

      </Modal>

    </>
  )
}

export default ModalDisplay