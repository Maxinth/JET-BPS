import React from 'react'
//import classes from './index.module.css'
import {Modal} from 'react-bootstrap'
import { Col} from 'react-bootstrap';
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
<Modal.Header style={{ 
  color:'white',backgroundColor:'#9c27b0'}} >
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
                  <Button variant="contained"
                  onClick={()=>window.print()} 
                  sx={{ float: "right",
                  bgcolor:'#9c27b0',
  '&:hover':{
    bgcolor:'#9c27b0'
  }
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