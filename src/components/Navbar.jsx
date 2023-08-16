import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
// import ether from 'ethers';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

async function requestAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

// Call this function to request account access
// For example, on a button click
async function connectToMetaMask() {
  try {
    await requestAccount();
    console.log('Connected to MetaMask');
  } catch (error) {
    console.error('Error connecting to MetaMask:', error);
  }
}

function BasicExample() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
      <Container data-aos="fade-down" data-aos-delay="200">
        <Navbar.Brand href="#home">LYNARO.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className='nav-link me-5'>Home</Nav.Link>
            <Nav.Link href="#lynaro" className='nav-link me-5'>lynaro</Nav.Link>
            <Nav.Link href="#token" className='nav-link me-5'>token</Nav.Link>
            <Nav.Link href="#learn" className='nav-link me-5'>learn</Nav.Link>
            <Nav.Link href="#connect" className='btn btn-theme bg-transparent-btn' onClick={connectToMetaMask}>connect <FontAwesomeIcon icon={faLink} /></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;