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

export default function ReportPrint() {
  const componentRef = useRef();
  const [data, setData] = useState([]);
  const [value, setValue] = useState(dayjs("2022-12-02"));
  const [toTime, settoTime] = useState(dayjs("2022-12-02"));
  const [findbutton, setfindbutton] = useState(false);

  let unixFromDate = String(new Date(value).valueOf() / 1000);
  let unixToDate = String(new Date(toTime).valueOf() / 1000);

  const baseUrl = `https://us-central1-arduinogasproject.cloudfunctions.net/app/api/${process.env.REACT_APP_API_KEY}/getData/${unixFromDate}/To/${unixToDate}`;

  const getData = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  const handleChange = () => {
    getData();
    setfindbutton(true);
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
      </div>

      <div ref={componentRef} className="container print-page">
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">Date & Time</th>
                <th scope="col">Co2</th>
                <th scope="col">Dust</th>
                <th scope="col">H2</th>
                <th scope="col">Ethanol</th>
                <th scope="col">Humidity</th>
                <th scope="col">Latitude</th>
                <th scope="col">Longitude</th>
                <th scope="col">PM 2.5</th>
                <th scope="col">O3</th>
                <th scope="col">Temperature</th>
                <th scope="col">VOC</th>
              </tr>
            </thead>
            <tbody>
              {data.map((element) => {
                return (
                  <tr key={element.epoch}>
                    <td>{element.epoch}</td>
                    <td>{element.co2}</td>
                    <td>{element.dust}</td>
                    <td>{element.h2}</td>
                    <td>{element.eth}</td>
                    <td>{element.hum}</td>
                    <td>{element.lat}</td>
                    <td>{element.lon}</td>
                    <td>{element.mq135}</td>
                    <td>{element.o3}</td>
                    <td>{element.temp}</td>
                    <td>{element.voc}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
