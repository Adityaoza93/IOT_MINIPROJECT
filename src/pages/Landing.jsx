import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.css";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function Landing() {
  const [value, setValue] = useState(dayjs("2022-04-07"));
  console.log(value);
  console.log(new Date(value).valueOf() / 1000);
  return (
    <div className="jumbotron topDiv text-center">
      <h1>
        AIR <br /> QUALITY <br /> MONITORING <br /> SYSTEM
      </h1>
      <div className="container-fluid dateTime">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              // console.log(value);
              // console.log(new Date(value).valueOf() / 1000);
            }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
