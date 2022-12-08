import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import TextField from "@mui/material/TextField";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
export default function Dashboard(props) {
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
      text: "CO2 Chart",
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
        name: "CO2",
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
      text: "Ethanol",
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
        name: "Ethanol",
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
        name: "temp",
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
      text: "VOC",
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
        name: "voc",
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
      text: "H2",
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
        name: "h2",
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
        name: "hum",
        data: data.hum.slice(
          Math.max(data.hum.length - Number(AdjustmentTime), 0)
        ),
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div
      style={{ backgroundColor: "#6198FF" }}
      className="container-fluid maincont"
    >
      <div className="row">
        <div className="col-md-12 AdjustText">
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
      </div>
      <div className="row">
        <div className="col-md-12">
          <h4 style={{ textAlign: "center" }}></h4>
        </div>

        <div className="section col-md-6">
          <h3 className="section-title"></h3>
          <div className="section-content">
            <HighchartsReact highcharts={Highcharts} options={co2Line} />
          </div>
        </div>

        <div className="section col-md-6">
          <h3 className="section-title"></h3>
          <div className="section-content">
            <HighchartsReact highcharts={Highcharts} options={dustLine} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>

        <div className="section col-md-6">
          <h3 className="section-title"></h3>
          <div className="section-content">
            <HighchartsReact highcharts={Highcharts} options={ethLine} />
          </div>
        </div>

        <div className="section col-md-6">
          <h3 className="section-title"></h3>
          <div className="section-content">
            <HighchartsReact highcharts={Highcharts} options={h2Line} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>

        <div className="section col-md-6">
          <h3 className="section-title"></h3>
          <div className="section-content">
            <HighchartsReact highcharts={Highcharts} options={humLine} />
          </div>
        </div>

        <div className="section col-md-6">
          <h3 className="section-title"></h3>
          <div className="section-content">
            <HighchartsReact highcharts={Highcharts} options={mq135Line} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>

        <div className="section col-md-6">
          <h3 className="section-title">&nbsp;</h3>
          <div className="section-content">
            <HighchartsReact highcharts={Highcharts} options={o3line} />
          </div>
        </div>

        <div className="section col-md-6">
          <h3 className="section-title">&nbsp;</h3>
          <div className="section-content">
            <HighchartsReact highcharts={Highcharts} options={tempLine} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>

        <div className="section col-md-6">
          <h3 className="section-title">&nbsp;</h3>
          <div className="section-content">
            <HighchartsReact highcharts={Highcharts} options={vocLine} />
          </div>
        </div>
      </div>
    </div>
  );
}
