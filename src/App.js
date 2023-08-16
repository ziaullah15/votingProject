import React, { useState, useEffect } from 'react';
// import ether from "ethers";
// import abi from "./contractABI/abi.json";
import 'aos/dist/aos.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './components/style.css';
import './components/mediaQueries.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import TableContent from './components/TableContent';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
      // Add more options as needed
    });
  }, []);

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x46436dcb1b29b111a00bb61f5475b420ef1104eb";
      const contractABI = abi.abi;
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        }
    connectWallet();
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <TableContent />
      <Footer />
    </>
  );
}

export default App;
