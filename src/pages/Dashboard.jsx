import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import axios from "axios"

const baseUrl = "https://us-central1-arduinogasproject.cloudfunctions.net/app/getData";

export default function Dashboard() {

  const [data, setData] = useState({
    co2:[],
    dust:[],
    epoch:[],
    eth:[],
    h2:[],
    hum:[],
    lat:[],
    lon:[],
    mq135:[],
    o3:[],
    temp:[],
    voc:[]
  });
  
  const getData = async () => {
    await axios.get(baseUrl)
      .then((response) => {
        setData(response.data);
      })
  }

  useEffect(() => getData(), []);

  const co2Line = {
    title: {
      text: 'Line chart'
    },
    xAxis: {
      categories: data.epoch
    },
    colors: ['#FB8833'],
    series: [
      {
        name: 'CO2',
        data: data.co2
      }
    ],
    credits: {
      enabled: false
    }
  }
  const dustLine = {
    title: {
      text: 'Line chart'
    },
    xAxis: {
      categories: data.epoch
    },
    colors: ['#FB8833'],
    series: [
      {
        name: 'Dust',
        data: data.dust
      }
    ],
    credits: {
      enabled: false
    }
  }
  const ethLine = {
    title: {
      text: 'Line chart'
    },
    xAxis: {
      categories: data.epoch
    },
    colors: ['#FB8833', '#17A8F5'],
    series: [
      {
        name: 'Ethanol',
        data: data.eth
      }
    ],
    credits: {
      enabled: false
    }
  }
  const mq135Line = {
    title: {
      text: 'Line chart'
    },
    xAxis: {
      categories: data.epoch
    },
    colors: ['#FB8833'],
    series: [
      {
        name: 'Sales',
        data: data.mq135
      }
    ],
    credits: {
      enabled: false
    }
  }
  const o3line = {
    title: {
      text: 'Line chart'
    },
    xAxis: {
      categories: data.epoch
    },
    colors: ['#FB8833'],
    series: [
      {
        name: 'Sales',
        data: data.o3
      }
    ],
    credits: {
      enabled: false
    }
  }
  const tempLine = {
    title: {
      text: 'Line chart'
    },
    xAxis: {
      categories: data.epoch
    },
    colors: ['#FB8833'],
    series: [
      {
        name: 'Sales',
        data: data.temp
      }
    ],
    credits: {
      enabled: false
    }
  }
  const vocLine = {
    title: {
      text: 'Line chart'
    },
    xAxis: {
      categories: data.epoch
    },
    colors: ['#FB8833'],
    series: [
      {
        name: 'Sales',
        data: data.voc
      }
    ],
    credits: {
      enabled: false
    }
  }
  const h2Line = {
    title: {
      text: 'Line chart'
    },
    xAxis: {
      categories: data.epoch
    },
    colors: ['#FB8833'],
    series: [
      {
        name: 'Sales',
        data: data.h2
      }
    ],
    credits: {
      enabled: false
    }
  }
  const humLine = {
    title: {
      text: 'Line chart'
    },
    xAxis: {
      categories: data.epoch
    },
    colors: ['#FB8833'],
    series: [
      {
        name: 'Sales',
        data: data.hum
      }
    ],
    credits: {
      enabled: false
    }
  }
  return (
    <><div className="row">
      <div className="col-md-12">
        <h2>Dashboard</h2>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Co2 Chart</h3>
        <div className="section-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={co2Line} />
        </div>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Dust Chart</h3>
        <div className="section-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={dustLine} />
        </div>
      </div>

    </div><div className="row">
        <div className="col-md-12">

        </div>

        <div className="section col-md-6">
          <h3 className="section-title">Ethanol Chart</h3>
          <div className="section-content">
            <HighchartsReact
              highcharts={Highcharts}
              options={ethLine} />
          </div>
        </div>

        <div className="section col-md-6">
          <h3 className="section-title">H2 Chart</h3>
          <div className="section-content">
            <HighchartsReact
              highcharts={Highcharts}
              options={h2Line} />
          </div>
        </div>

      </div>
      <div className="row">
        <div className="col-md-12">

        </div>

        <div className="section col-md-6">
          <h3 className="section-title">Humidity Chart</h3>
          <div className="section-content">
            <HighchartsReact
              highcharts={Highcharts}
              options={humLine}
            />
          </div>
        </div>

        <div className="section col-md-6">
          <h3 className="section-title">MQ-135 Chart</h3>
          <div className="section-content">
            <HighchartsReact
              highcharts={Highcharts}
              options={mq135Line}
            />
          </div>
        </div>

      </div>
      <div className="row">
        <div className="col-md-12">

        </div>

        <div className="section col-md-6">
          <h3 className="section-title">O3 Chart</h3>
          <div className="section-content">
            <HighchartsReact
              highcharts={Highcharts}
              options={o3line}
            />
          </div>
        </div>

        <div className="section col-md-6">
          <h3 className="section-title">Temperature Chart</h3>
          <div className="section-content">
            <HighchartsReact
              highcharts={Highcharts}
              options={tempLine}
            />
          </div>
        </div>

      </div>
      <div className="row">
        <div className="col-md-12">

        </div>

        <div className="section col-md-6">
          <h3 className="section-title">VOC Chart</h3>
          <div className="section-content">
            <HighchartsReact
              highcharts={Highcharts}
              options={vocLine}
            />
          </div>
        </div>
      </div>
    </>
  )
  }