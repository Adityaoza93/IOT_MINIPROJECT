import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import TextField from "@mui/material/TextField";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Select from "react-select";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Dashboard(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);
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

  const [AdjustmentTime, setAdjustmentTime] = useState(String(20));

  const handleTextChange = (event) => {
    setAdjustmentTime(event.target.value);
    // console.log(event.target.value);
  };

  const getData = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => getData(), []);

  const co2Line = {
    chart: {
      backgroundColor: "#ffffff00",
      type: "line",
    },
    title: {
      text: "eCO2 Chart",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: data.epoch.slice(
        Math.max(data.epoch.length - Number(AdjustmentTime), 0)
      ),
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "eCO2",
        data: data.co2.slice(
          Math.max(data.co2.length - Number(AdjustmentTime), 0)
        ),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const dustLine = {
    chart: {
      backgroundColor: "#ffffff00",
      type: "line",
    },
    title: {
      text: "PM2.5",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: data.epoch.slice(
        Math.max(data.epoch.length - Number(AdjustmentTime), 0)
      ),
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "PM2.5",
        data: data.dust.slice(
          Math.max(data.dust.length - Number(AdjustmentTime), 0)
        ),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const ethLine = {
    chart: {
      backgroundColor: "#ffffff00",
      type: "line",
    },
    title: {
      text: "Raw Ethanol",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: data.epoch.slice(
        Math.max(data.epoch.length - Number(AdjustmentTime), 0)
      ),
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "Raw Ethanol",
        data: data.eth.slice(
          Math.max(data.eth.length - Number(AdjustmentTime), 0)
        ),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const mq135Line = {
    chart: {
      backgroundColor: "#ffffff00",
      type: "line",
    },
    title: {
      text: "Ammonia, Sulphur, Carbon dioxide, Benzene",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: data.epoch.slice(
        Math.max(data.epoch.length - Number(AdjustmentTime), 0)
      ),
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "Ammonia, Sulphur, Carbon dioxide, Benzene",
        data: data.mq135.slice(
          Math.max(data.mq135.length - Number(AdjustmentTime), 0)
        ),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const o3line = {
    chart: {
      backgroundColor: "#ffffff00",
      type: "line",
    },
    title: {
      text: "O3",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: data.epoch.slice(
        Math.max(data.epoch.length - Number(AdjustmentTime), 0)
      ),
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "O3",
        data: data.o3.slice(
          Math.max(data.o3.length - Number(AdjustmentTime), 0)
        ),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const tempLine = {
    chart: {
      backgroundColor: "#ffffff00",
      type: "line",
    },
    title: {
      text: "Temperature",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: data.epoch.slice(
        Math.max(data.epoch.length - Number(AdjustmentTime), 0)
      ),
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "Temperature",
        data: data.temp.slice(
          Math.max(data.temp.length - Number(AdjustmentTime), 0)
        ),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const vocLine = {
    chart: {
      backgroundColor: "#ffffff00",
      type: "line",
    },
    title: {
      text: "TVOC",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: data.epoch.slice(
        Math.max(data.epoch.length - Number(AdjustmentTime), 0)
      ),
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "TVOC",
        data: data.voc.slice(
          Math.max(data.voc.length - Number(AdjustmentTime), 0)
        ),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const h2Line = {
    chart: {
      backgroundColor: "#ffffff00",
      type: "line",
    },
    title: {
      text: "Raw H2",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: data.epoch.slice(
        Math.max(data.epoch.length - Number(AdjustmentTime), 0)
      ),
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "Raw H2",
        data: data.h2.slice(
          Math.max(data.h2.length - Number(AdjustmentTime), 0)
        ),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const humLine = {
    chart: {
      backgroundColor: "#ffffff00",
      type: "line",
    },
    title: {
      text: "Humidity",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: data.epoch.slice(
        Math.max(data.epoch.length - Number(AdjustmentTime), 0)
      ),
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "Humidity",
        data: data.hum.slice(
          Math.max(data.hum.length - Number(AdjustmentTime), 0)
        ),
      },
    ],
    credits: {
      enabled: false,
    },
  };

  const optionList = [
    { value: co2Line, label: "eCO2" },
    { value: dustLine, label: "PM 2.5" },
    { value: ethLine, label: "Raw Ethanol" },
    { value: h2Line, label: "Raw H2" },
    { value: humLine, label: "Humidity" },
    { value: mq135Line, label: "Benzene, Ammonia Composite" },
    { value: o3line, label: "O3" },
    { value: tempLine, label: "Temperature" },
    { value: vocLine, label: "TVOC" },
  ];

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
          <div className="my-4">
          <Select
            options={optionList}
            placeholder="Select graph"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
          />
          </div>
          </Col>
          <Col>
              <div className="my-3">
              <div className="pointbox">
              <TextField
                  id="outlined-basic"
                  label="Enter Number of points to plot"
                  variant="outlined"
                  value={AdjustmentTime}
                  onChange={handleTextChange}
               />
              </div>
              </div>
          
          </Col>
        </Row>
      </Container>
      <div className="d-flex flex-wrap">
        {selectedOptions.map((element) => {
          return (
            <div className="p-2">
              <HighchartsReact
                highcharts={Highcharts}
                options={element.value}
              />
            </div>
          );
        })}
      </div>
      </>
  );
}
