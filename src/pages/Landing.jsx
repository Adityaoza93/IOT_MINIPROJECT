import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Link } from "react-router-dom";

export default function Landing() {
  const [value, setValue] = useState(dayjs("2022-04-07"));
  // console.log(value);
  let unixdate = String(new Date(value).valueOf() / 1000);
  const [AdjustmentTime, setAdjustmentTime] = useState(String(5));
  const handleTextChange = (event) => {
    setAdjustmentTime(event.target.value);
    // console.log(event.target.value);
  };
  // console.log(AdjustmentTime);

  return (
    <div className="jumbotron topDiv text-center">
      <h1>
        AIR <br /> QUALITY <br /> MONITORING <br /> SYSTEM
      </h1>
      <div className="row">
        <div className="container-fluid dateTime col">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Select Date and Time"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              required
            />
          </LocalizationProvider>
        </div>
        <div className="col dateTime">
          <TextField
            id="outlined-basic"
            label="Enter Adjustment Time in Minutes"
            variant="outlined"
            value={AdjustmentTime}
            onChange={handleTextChange}
          />
        </div>
        <div className="col dateTime">
          <Link
            to={`/SpecDashboard`}
            state={{ unixTime: unixdate, adjustTime: AdjustmentTime }}
          >
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                console.log("Button Clicked!");
              }}
              startIcon={<SearchIcon />}
              required
            >
              Find Data
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
