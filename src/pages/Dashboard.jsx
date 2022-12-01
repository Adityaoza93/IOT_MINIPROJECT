import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const baseUrl =
  "https://us-central1-arduinogasproject.cloudfunctions.net/app/getData";

export default function Dashboard() {
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

  const co2Line = {
    chart: {
      backgroundColor: "#ffffff",
      type: "line",
    },
    title: {
      text: "CO2 Chart",
    },
    xAxis: {
      categories: data.epoch.slice(Math.max(data.epoch.length - 20, 0)),
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "CO2",
        data: data.co2.slice(Math.max(data.co2.length - 20, 0)),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const dustLine = {
    title: {
      text: "PM2.5",
    },
    xAxis: {
      categories: data.epoch.slice(Math.max(data.epoch.length - 20, 0)),
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "PM2.5",
        data: data.dust.slice(Math.max(data.dust.length - 20, 0)),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const ethLine = {
    title: {
      text: "Ethanol",
    },
    xAxis: {
      categories: data.epoch.slice(Math.max(data.epoch.length - 20, 0)),
    },
    colors: ["#FB8833", "#17A8F5"],
    series: [
      {
        name: "Ethanol",
        data: data.eth.slice(Math.max(data.eth.length - 20, 0)),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const mq135Line = {
    title: {
      text: "Ammonia, Sulphur, Carbon dioxide, Benzene",
    },
    xAxis: {
      categories: data.epoch.slice(Math.max(data.epoch.length - 20, 0)),
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "Ammonia, Sulphur, Carbon dioxide, Benzene",
        data: data.mq135.slice(Math.max(data.mq135.length - 20, 0)),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const o3line = {
    title: {
      text: "O3",
    },
    xAxis: {
      categories: data.epoch.slice(Math.max(data.epoch.length - 20, 0)),
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "O3",
        data: data.o3.slice(Math.max(data.o3.length - 20, 0)),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const tempLine = {
    title: {
      text: "Temperature",
    },
    xAxis: {
      categories: data.epoch.slice(Math.max(data.epoch.length - 20, 0)),
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "temp",
        data: data.temp.slice(Math.max(data.temp.length - 20, 0)),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const vocLine = {
    title: {
      text: "VOC",
    },
    xAxis: {
      categories: data.epoch.slice(Math.max(data.epoch.length - 20, 0)),
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "voc",
        data: data.voc.slice(Math.max(data.voc.length - 20, 0)),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const h2Line = {
    title: {
      text: "h2",
    },
    xAxis: {
      categories: data.epoch.slice(Math.max(data.epoch.length - 20, 0)),
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "h2",
        data: data.h2.slice(Math.max(data.h2.length - 20, 0)),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const humLine = {
    title: {
      text: "Humidity",
    },
    xAxis: {
      categories: data.epoch.slice(Math.max(data.epoch.length - 20, 0)),
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "hum",
        data: data.hum.slice(Math.max(data.hum.length - 20, 0)),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
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
