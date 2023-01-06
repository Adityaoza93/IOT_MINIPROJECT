import React, { useRef, useState } from "react";
import axios from "axios";
import "./ReportPrint.css";
import SearchIcon from "@mui/icons-material/Search";
import ReactToPrint from "react-to-print";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Hidden } from "@mui/material";

export default function ReportPrint() {
  const componentRef = useRef();
  const [data, setData] = useState([]);
  const [value, setValue] = useState(dayjs("2022-12-02"));
  const [toTime, settoTime] = useState(dayjs("2022-12-02"));
  const [findbutton, setfindbutton] = useState(false);
  const [checked, setchecked] = useState(false);
  const [Datechecked, setDatechecked] = useState(true);
  const [co2checked, setco2checked] = useState(true);
  const [dustchecked, setdustchecked] = useState(true);
  const [h2checked, seth2checked] = useState(true);
  const [ethchecked, setethchecked] = useState(true);
  const [humchecked, sethumchecked] = useState(true);
  const [latchecked, setlatchecked] = useState(true);
  const [lonchecked, setlonchecked] = useState(true);
  const [mq135checked, setmq135checked] = useState(true);
  const [o3checked, seto3checked] = useState(true);
  const [tempchecked, settempchecked] = useState(true);
  const [vocchecked, setvocchecked] = useState(true);
  const [dataGraph, setDataGraph] = useState({
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

  let unixFromDate = String(new Date(value).valueOf() / 1000);
  let unixToDate = String(new Date(toTime).valueOf() / 1000);

  const baseUrl = `https://us-central1-arduinogasproject.cloudfunctions.net/app/api/${process.env.REACT_APP_API_KEY}/getData/${unixFromDate}/To/${unixToDate}`;
  const baseUrlGraph = `https://us-central1-arduinogasproject.cloudfunctions.net/app/api/2/${process.env.REACT_APP_API_KEY}/getData/${unixFromDate}/To/${unixToDate}`;
  const getData = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  const getDataGraph = async () => {
    await axios.get(baseUrlGraph).then((response) => {
      setDataGraph(response.data);
    });
  };

  const handleChange = () => {
    getData();
    getDataGraph();
    setfindbutton(true);
  };

  const graphChange = () => {
    setchecked(!checked);
    if (!checked) {
      document.querySelector(".Div2").style.display = "block";
    } else {
      document.querySelector(".Div2").style.display = "none";
    }
  };

  const dateChange = (event) => {
    setDatechecked(event.target.checked);
  };

  const co2Change = (event) => {
    setco2checked(event.target.checked);
  };

  const dustChange = (event) => {
    setdustchecked(event.target.checked);
  };

  const h2Change = (event) => {
    seth2checked(event.target.checked);
  };

  const ethChange = (event) => {
    setethchecked(event.target.checked);
  };

  const humChange = (event) => {
    sethumchecked(event.target.checked);
  };

  const latChange = (event) => {
    setlatchecked(event.target.checked);
  };

  const lonChange = (event) => {
    setlonchecked(event.target.checked);
  };

  const mq135Change = (event) => {
    setmq135checked(event.target.checked);
  };

  const o3Change = (event) => {
    seto3checked(event.target.checked);
  };

  const tempChange = (event) => {
    settempchecked(event.target.checked);
  };

  const vocChange = (event) => {
    setvocchecked(event.target.checked);
  };

  const co2Line = {
    chart: {
      backgroundColor: "#ffffff00",
      type: "line",
    },
    title: {
      text: "CO2 Chart",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: dataGraph.epoch,
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "CO2",
        data: dataGraph.co2,
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
      categories: dataGraph.epoch,
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
        data: dataGraph.dust,
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
      text: "Ethanol",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: dataGraph.epoch,
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "Ethanol",
        data: dataGraph.eth,
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
      categories: dataGraph.epoch,
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
        data: dataGraph.mq135,
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
      categories: dataGraph.epoch,
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
        data: dataGraph.o3,
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
      categories: dataGraph.epoch,
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "temp",
        data: dataGraph.temp,
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
      text: "VOC",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: dataGraph.epoch,
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "voc",
        data: dataGraph.voc,
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
      text: "H2",
      style: {
        color: "#004CBB",
      },
    },
    xAxis: {
      categories: dataGraph.epoch,
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "h2",
        data: dataGraph.h2,
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
      categories: dataGraph.epoch,
      labels: {
        style: {
          color: "#004CBB",
        },
      },
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "hum",
        data: dataGraph.hum,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div>
      <div
        className="d-flex justify-content-around"
        style={{ marginTop: "1rem" }}
      >
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Select From Date and Time"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
                setfindbutton(false);
              }}
              required
            />
          </LocalizationProvider>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Select To Date and Time"
              value={toTime}
              onChange={(newValue) => {
                settoTime(newValue);
                setfindbutton(false);
              }}
              required
            />
          </LocalizationProvider>
        </div>
        <div>
          <Button
            variant="outlined"
            size="large"
            onClick={handleChange}
            startIcon={<SearchIcon />}
            required
          >
            View
          </Button>
        </div>
        <div>
          <ReactToPrint
            trigger={() => {
              return (
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PrintOutlinedIcon />}
                  required
                  disabled={!findbutton}
                >
                  Print
                </Button>
              );
            }}
            content={() => componentRef.current}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={checked}
            onChange={graphChange}
          />
          <label htmlFor="">&nbsp;See Graph</label>
        </div>
      </div>

      <div
        className="d-flex justify-content-around"
        style={{ marginTop: "1rem" }}
      >
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={Datechecked}
            onChange={dateChange}
          />
          <label htmlFor="">&nbsp;Date & Time</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={co2checked}
            onChange={co2Change}
          />
          <label htmlFor="">&nbsp;eCO2</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={dustchecked}
            onChange={dustChange}
          />
          <label htmlFor="">&nbsp;PM 2.5</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={h2checked}
            onChange={h2Change}
          />
          <label htmlFor="">&nbsp;H2</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={ethchecked}
            onChange={ethChange}
          />
          <label htmlFor="">&nbsp;Raw Ethanol</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={humchecked}
            onChange={humChange}
          />
          <label htmlFor="">&nbsp;Humidity</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={latchecked}
            onChange={latChange}
          />
          <label htmlFor="">&nbsp;Latitude</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={lonchecked}
            onChange={lonChange}
          />
          <label htmlFor="">&nbsp;Longitude</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={mq135checked}
            onChange={mq135Change}
          />
          <label htmlFor="">&nbsp;Sulphur, Ammonia Composite</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={o3checked}
            onChange={o3Change}
          />
          <label htmlFor="">&nbsp;O3</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={tempchecked}
            onChange={tempChange}
          />
          <label htmlFor="">&nbsp;Temperature</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="graphCheck"
            id="graphCheck"
            checked={vocchecked}
            onChange={vocChange}
          />
          <label htmlFor="">&nbsp;TVOC</label>
        </div>
      </div>

      <div ref={componentRef} className="container print-page">
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col" style={Datechecked ? {} : { display: "none" }}>
                  Date & Time
                </th>
                <th scope="col" style={co2checked ? {} : { display: "none" }}>
                  CO2
                </th>
                <th scope="col" style={dustchecked ? {} : { display: "none" }}>
                  PM 2.5
                </th>
                <th scope="col" style={h2checked ? {} : { display: "none" }}>
                  H2
                </th>
                <th scope="col" style={ethchecked ? {} : { display: "none" }}>
                  Ethanol
                </th>
                <th scope="col" style={humchecked ? {} : { display: "none" }}>
                  Humidity
                </th>
                <th scope="col" style={latchecked ? {} : { display: "none" }}>
                  Latitude
                </th>
                <th scope="col" style={lonchecked ? {} : { display: "none" }}>
                  Longitude
                </th>
                <th scope="col" style={mq135checked ? {} : { display: "none" }}>
                  Sulphur, Ammonia Composite
                </th>
                <th scope="col" style={o3checked ? {} : { display: "none" }}>
                  O3
                </th>
                <th scope="col" style={tempchecked ? {} : { display: "none" }}>
                  Temperature
                </th>
                <th scope="col" style={vocchecked ? {} : { display: "none" }}>
                  VOC
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((element) => {
                return (
                  <tr key={element.epoch}>
                    <td style={Datechecked ? {} : { display: "none" }}>
                      {element.epoch}
                    </td>
                    <td style={co2checked ? {} : { display: "none" }}>
                      {element.co2}
                    </td>
                    <td style={dustchecked ? {} : { display: "none" }}>
                      {element.dust}
                    </td>
                    <td style={h2checked ? {} : { display: "none" }}>
                      {element.h2}
                    </td>
                    <td style={ethchecked ? {} : { display: "none" }}>
                      {element.eth}
                    </td>
                    <td style={humchecked ? {} : { display: "none" }}>
                      {element.hum}
                    </td>
                    <td style={latchecked ? {} : { display: "none" }}>
                      {element.lat}
                    </td>
                    <td style={lonchecked ? {} : { display: "none" }}>
                      {element.lon}
                    </td>
                    <td style={mq135checked ? {} : { display: "none" }}>
                      {element.mq135}
                    </td>
                    <td style={o3checked ? {} : { display: "none" }}>
                      {element.o3}
                    </td>
                    <td style={tempchecked ? {} : { display: "none" }}>
                      {element.temp}
                    </td>
                    <td style={vocchecked ? {} : { display: "none" }}>
                      {element.voc}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="Div2">
          <div className="row">
            <div className="col-md-12">
              <h4 style={{ textAlign: "center" }}></h4>
            </div>

            <div
              className="section col-md-6"
              style={co2checked ? {} : { display: "none" }}
            >
              <h3 className="section-title"></h3>
              <div className="section-content">
                <HighchartsReact highcharts={Highcharts} options={co2Line} />
              </div>
            </div>

            <div
              className="section col-md-6"
              style={dustchecked ? {} : { display: "none" }}
            >
              <h3 className="section-title"></h3>
              <div className="section-content">
                <HighchartsReact highcharts={Highcharts} options={dustLine} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12"></div>

            <div
              className="section col-md-6"
              style={ethchecked ? {} : { display: "none" }}
            >
              <h3 className="section-title"></h3>
              <div className="section-content">
                <HighchartsReact highcharts={Highcharts} options={ethLine} />
              </div>
            </div>

            <div
              className="section col-md-6"
              style={h2checked ? {} : { display: "none" }}
            >
              <h3 className="section-title"></h3>
              <div className="section-content">
                <HighchartsReact highcharts={Highcharts} options={h2Line} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12"></div>

            <div
              className="section col-md-6"
              style={humchecked ? {} : { display: "none" }}
            >
              <h3 className="section-title"></h3>
              <div className="section-content">
                <HighchartsReact highcharts={Highcharts} options={humLine} />
              </div>
            </div>

            <div
              className="section col-md-6"
              style={mq135checked ? {} : { display: "none" }}
            >
              <h3 className="section-title"></h3>
              <div className="section-content">
                <HighchartsReact highcharts={Highcharts} options={mq135Line} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12"></div>

            <div
              className="section col-md-6"
              style={o3checked ? {} : { display: "none" }}
            >
              <h3 className="section-title">&nbsp;</h3>
              <div className="section-content">
                <HighchartsReact highcharts={Highcharts} options={o3line} />
              </div>
            </div>

            <div
              className="section col-md-6"
              style={tempchecked ? {} : { display: "none" }}
            >
              <h3 className="section-title">&nbsp;</h3>
              <div className="section-content">
                <HighchartsReact highcharts={Highcharts} options={tempLine} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12"></div>

            <div
              className="section col-md-6"
              style={vocchecked ? {} : { display: "none" }}
            >
              <h3 className="section-title">&nbsp;</h3>
              <div className="section-content">
                <HighchartsReact highcharts={Highcharts} options={vocLine} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
