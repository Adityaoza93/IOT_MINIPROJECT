import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/iotlogo.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar12.css";

function Navbar12(props) {
  const baseUrl = props.baseUrl;

  const [data, setData] = useState({
    co2: [],
    dust: [],
    epoch: [],
    eth: [],
    h2: [],
    hum: [],
    lat: [],
    lon: [],
    mq135: [],
    o3: [],
    temp: [],
    voc: [],
  });

  const getData = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => getData(), []);

  return (
    <>
      <Navbar style={{ backgroundColor: "#6198FF" }} variant="dark">
        <Container>
          <Navbar.Brand href="./">
            <img src={logo} alt="IOT" style={{ marginRight: "1.25rem" }} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="./Location">Location</Nav.Link>
            <Nav.Link href="./ReportPrint">Generate Report</Nav.Link>
          </Nav>
          <Navbar.Text>
            Location - Longitude: {data.lon} & Latitude: {data.lat}
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar12;
