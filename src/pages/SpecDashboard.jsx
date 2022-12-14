import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const { unixTime, adjustTime } = location.state;
  const baseUrl = `https://us-central1-arduinogasproject.cloudfunctions.net/app/api/KeyA20222023/getData/${unixTime}/adjustTime/${adjustTime}`;
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
    title: {
      text: "CO2 Chart",
    },
    xAxis: {
      categories: data.epoch,
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "CO2",
        data: data.co2,
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
      categories: data.epoch,
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "PM2.5",
        data: data.dust,
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
      categories: data.epoch,
    },
    colors: ["#FB8833", "#17A8F5"],
    series: [
      {
        name: "Ethanol",
        data: data.eth,
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
      categories: data.epoch,
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "Ammonia, Sulphur, Carbon dioxide, Benzene",
        data: data.mq135,
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
      categories: data.epoch,
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "O3",
        data: data.o3,
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
      categories: data.epoch,
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "temp",
        data: data.temp,
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
      categories: data.epoch,
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "voc",
        data: data.voc,
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
      categories: data.epoch,
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "h2",
        data: data.h2,
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
      categories: data.epoch,
    },
    colors: ["#FB8833"],
    series: [
      {
        name: "hum",
        data: data.hum,
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
