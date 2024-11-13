import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
function ResponsiveExample() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>

<IconButton style={{backgroundColor:'blue', color:'white'}} > 
          <MenuIcon  onClick={handleShow}/>
  </IconButton>

      
        <Offcanvas show={show} onHide={handleClose} style={{ width: '200px' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body  >
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
export default ResponsiveExample;