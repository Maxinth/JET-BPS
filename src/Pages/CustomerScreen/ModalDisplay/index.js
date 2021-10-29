import React from 'react'
import classes from './index.module.css'
import {CloseButton, Modal} from 'react-bootstrap'
import { Col,Row,Container } from 'react-bootstrap';

import {Button} from '@mui/material'



const ModalDisplay=({handleClose,open,children,title})=>{

  
    
    return(

        <>

<Modal
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    
      >
<Modal.Header style={{ textAlign:'center'}} >
          <Modal.Title >{title}</Modal.Title>
        
        </Modal.Header>
        <Modal.Body >
          {children}

        </Modal.Body>
        <Modal.Footer>
        <Col md={12}>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ float: "left", color: "red" }}
                    onClick={handleClose}
                  >
                    {"<<<"} Return
                  </Button>
                  <Button variant="contained" sx={{ float: "right" }} onClick={()=>window.print()}>
                    Print this page
                  </Button>
                </Col>
        </Modal.Footer>
        
      </Modal>
        
        </>
    )
}

export default ModalDisplay