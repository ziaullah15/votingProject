import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../contractABI/abi.json";
import { Tab, Tabs } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
const TableContent = () => {
  const [tokenAmount, settokenAmount] = useState("");
  const [tokenAmount1, settokenAmount1] = useState("");
  const [nftId, setnftId] = useState("");
  const [nftId1, setnftId1] = useState("");
  const [nftId2, setnftId2] = useState("");
  const [totalLocked, setTotalLocked] = useState(0);
  const [userLocked, setUserLocked] = useState(0);
  const [balance, setBalance] = useState(0);

  

  // const [duration, setDuration] = useState(0);
  const [status, setStatus] = useState("");

  async function voterLock() {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        const data = "0x00039d80c90045062CAE78F2D9Ea200fF6714A65";
        const providers = new ethers.providers.Web3Provider(ethereum);
        const signer = providers.getSigner();
        const contract = new ethers.Contract(data, abi, signer);
        const sendTX = await contract.LockForVoter(tokenAmount, nftId);
        // await sendTX.wait()
        console.log(sendTX);
        const check = sendTX.toString();
        console.log(check);
        setStatus("sucessfully completed");
        // setStatus(check)
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function candidateLock() {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        const data = "0x00039d80c90045062CAE78F2D9Ea200fF6714A65";
        const providers = new ethers.providers.Web3Provider(ethereum);
        const signer = providers.getSigner();
        const contract = new ethers.Contract(data, abi, signer);
        const sendTX = await contract.LockForCandidate(
          tokenAmount1,
          nftId1,
          nftId2
        );
        // await sendTX.wait()
        console.log(sendTX);
        const check = sendTX.toString();
        console.log(check);
        setStatus("sucessfully completed");
        // setStatus(check)
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    async function locked() {
      const { ethereum } = window;

      if (ethereum) {
        try {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const providers = new ethers.providers.Web3Provider(ethereum);
          const signer = providers.getSigner();
          const data = "0x00039d80c90045062CAE78F2D9Ea200fF6714A65";
          const contract = new ethers.Contract(data, abi, signer);
          const readTX = await contract.totalLockedToken();
          setTotalLocked(readTX.toNumber()); // Convert BigNumber to JavaScript number and update the state
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }

    locked();
  }, []);

  useEffect(() => {
    async function userlocked() {
      const { ethereum } = window;

      if (ethereum) {
        try {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const providers = new ethers.providers.Web3Provider(ethereum);
          const signer = providers.getSigner();
          const data = "0x00039d80c90045062CAE78F2D9Ea200fF6714A65";
          const contract = new ethers.Contract(data, abi, signer);
          const readTX = await contract.getUserLockedTokens();
          setUserLocked(readTX.toNumber()); // Convert BigNumber to JavaScript number and update the state
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }

    userlocked();
  }, []);

  useEffect(() => {
    async function userBalance() {
      const { ethereum } = window;

      if (ethereum) {
        try {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const providers = new ethers.providers.Web3Provider(ethereum);
          const signer = providers.getSigner();
          const data = "0x00039d80c90045062CAE78F2D9Ea200fF6714A65";
          const contract = new ethers.Contract(data, abi, signer);
          const readTX = await contract.balanceOf();
          setBalance(readTX.toNumber()); // Convert BigNumber to JavaScript number and update the state
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }

    userBalance();
  }, []);

  async function claim() {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        const data = "0x00039d80c90045062CAE78F2D9Ea200fF6714A65";
        const providers = new ethers.providers.Web3Provider(ethereum);
        const signer = providers.getSigner();
        const contract = new ethers.Contract(data, abi, signer);
        const sendTX = await contract.claimAssets();
        // await sendTX.wait()
        console.log(sendTX);
        const check = sendTX.toString();
        console.log(check);
        setStatus("sucessfully completed");
        // setStatus(check)
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const Token = (e) => {
    const data = e.target.value;
    settokenAmount(data);
    console.log(tokenAmount);
  };
  const Token1 = (e) => {
    const data = e.target.value;
    settokenAmount1(data);
    console.log(tokenAmount1);
  };
  const NFT = (e) => {
    const data = e.target.value;
    setnftId(data);
    console.log(nftId);
  };
  const NFT1 = (e) => {
    const data = e.target.value;
    setnftId1(data);
    console.log(nftId1);
  };
  const NFT2 = (e) => {
    const data = e.target.value;
    setnftId2(data);
    console.log(nftId2);
  };

  return (
    <section className="min-vh-100 py-5">
      <Container>
        <div
          className="bg-img tabs-main-box"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Tabs defaultActiveKey="tab1" id="my-tabs">
            <Tab eventKey="tab1" title="Stats">
              {/* Content for Tab 1 */}

              <div className="row mt-3">
                <div className="col-md-4">
                  <Card className="p-4 min_h">
                    <Card.Title>Governance</Card.Title>
                    <Card.Text>
                      Lock up LYN so holders can create or vote on proposals
                      regarding our community portfolio or join our elite
                      discord server and get access to high tier market TA
                      services including: daily TA updates and weekly video's.
                    </Card.Text>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card className="p-4 min_h">
                    <Card.Title>Total LYN Locked</Card.Title>
                    <Card.Text>
                      <h2 className="fw-bold text-aqua">{totalLocked}</h2>
                    </Card.Text>
                  </Card>
                </div>
              </div>
              <Row>
                <Col>
                  <h6 className="table-header">RECENT ACTIVITY</h6>
                </Col>
                <div className="table-responsive">
                  <Table bordered hover>
                    <thead>
                      <tr className="border-radius">
                        <th>DATE</th>
                        <th>TXN HASH</th>
                        <th>TXN TYPE</th>
                        <th>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-radius">
                        <td>18/07/2023</td>
                        <td>
                          Oxfe4a1db709c858cc840...7da927c8ce06e4abc3459446
                        </td>
                        <td>LOCK</td>
                        <td>18,324 LYN</td>
                      </tr>
                      <tr className="border-radius">
                        <td>---</td>
                        <td>---</td>
                        <td>BUY</td>
                        <td>---</td>
                      </tr>
                      <tr className="border-radius">
                        <td>---</td>
                        <td>---</td>
                        <td>SELL</td>
                        <td>---</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Row>
            </Tab>
            <Tab eventKey="tab2" title="lock">
              {/* Content for Tab 2 */}
              <div className="row mt-3">
                <div className="col-md-6 ">
                  <Card className="p-4 min_h">
                    <Card.Title>Lock Asset For Candidate:</Card.Title>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Tokens:</Form.Label>
                        <Form.Control
                          type="text"
                          value={tokenAmount1}
                          onChange={Token1}
                          placeholder="Enter your tokens."
                        />
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput2"
                          >
                            <Form.Label>NFT:</Form.Label>
                            <Form.Control
                              type="text"
                              value={nftId1}
                              onChange={NFT1}
                              placeholder="Enter your First NFT Id."
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput3"
                          >
                            <Form.Label>NFT ID:</Form.Label>
                            <Form.Control
                              type="text"
                              value={nftId2}
                              onChange={NFT2}
                              placeholder="Enter your Second NFT ID."
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <a
                          className="btn bg-trans border1 txt-uppercase"
                          onClick={candidateLock}
                        >
                          lock asset for 30 days
                        </a>
                      </Form.Group>
                    </Form>
                  </Card>
                </div>
                <div className="col-md-6 ">
                  <Card className="p-4 min_h">
                    <Card.Title>Lock Asset For Voter:</Card.Title>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Tokens:</Form.Label>
                        <Form.Control
                          type="text"
                          value={tokenAmount}
                          onChange={Token}
                          placeholder="Enter your tokens."
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput3"
                      >
                        <Form.Label>NFT ID:</Form.Label>
                        <Form.Control
                          type="text"
                          value={nftId}
                          onChange={NFT}
                          placeholder="Enter NFT Id."
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <a
                          className="btn bg-trans border1 txt-uppercase"
                          onClick={voterLock}
                        >
                          lock asset for 30 days
                        </a>
                      </Form.Group>
                    </Form>
                  </Card>
                </div>
              </div>
              <Row>
                <Col>
                  <h6 className="table-header">RECENT ACTIVITY</h6>
                </Col>
                <div className="table-responsive">
                  <Table bordered hover>
                    <thead>
                      <tr className="border-radius">
                        <th>DATE</th>
                        <th>TXN HASH</th>
                        <th>TXN TYPE</th>
                        <th>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-radius">
                        <td>18/07/2023</td>
                        <td>
                          Oxfe4a1db709c858cc840...7da927c8ce06e4abc3459446
                        </td>
                        <td>LOCK</td>
                        <td>18,324 LYN</td>
                      </tr>
                      <tr className="border-radius">
                        <td>---</td>
                        <td>---</td>
                        <td>BUY</td>
                        <td>---</td>
                      </tr>
                      <tr className="border-radius">
                        <td>---</td>
                        <td>---</td>
                        <td>SELL</td>
                        <td>---</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Row>
            </Tab>
            <Tab eventKey="tab3" title="claim">
              {/* Content for Tab 3 */}

              <div className="row mt-3">
                <div className="col-md-6">
                  <Card className="p-4 min_h">
                    <Card.Title>Your LYN Locked</Card.Title>
                    <Card.Text>
                      <h2 className="fw-bold text-aqua">{userLocked}</h2>
                    </Card.Text>
                  </Card>
                </div>
                <div className="col-md-6">
                  <Card className="p-4 min_h">
                    <Card.Title>Your LYN Balance (Total)</Card.Title>
                    <Card.Text>
                      <h2 className="fw-bold text-aqua">{balance}</h2>
                    </Card.Text>
                  </Card>
                </div>
              </div>
              <Row>
                <Col>
                  <h6 className="table-header">VOTING LOCK DETAILS</h6>
                </Col>
                <div className="table-responsive">
                  <Table bordered hover>
                    <thead>
                      <tr className="border-radius">
                        <th>LOCK DATE</th>
                        <th>LOCKED UNTIL</th>
                        <th>LYN LOCKED</th>
                        <th>TXN</th>
                        <th>CLAIM TOKENS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-radius">
                        <td>18/07/2023</td>
                        <td>24/05/2025</td>
                        <td>15,000 LYN</td>
                        <td>VIEW ON PULSESCAN</td>
                        <td>
                          <button
                            className="btn bg-primary-aqua  txt-uppercase"
                            onClick={claim}
                          >
                            CLAIM
                          </button>
                        </td>
                      </tr>
                      <tr className="border-radius">
                        <td>21/08/2023</td>
                        <td>04/11/2024</td>
                        <td>25,000 LYN</td>
                        <td>VIEW ON PULSESCAN</td>
                        <td>
                          <button className="btn fw-bold text-white bg-dark txt-uppercase">
                            UNCLAIMABLE
                          </button>
                        </td>
                      </tr>

                      <tr className="border-radius">
                        <td>---</td>
                        <td>---</td>
                        <td>---</td>
                        <td>---</td>
                        <td>---</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Row>
            </Tab>
            <Tab eventKey="tab4" title="vote">
              {/* Content for Tab 4 */}
              <p>This is the content of Tab 4.</p>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default TableContent;
