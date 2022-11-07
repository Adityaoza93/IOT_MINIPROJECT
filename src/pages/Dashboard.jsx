import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import fireDb from "../firebase"



export default function Dashboard() {

  const [data, setData] = useState({});
  // const [dataArr, setDataArr] = useState([]);
  const [co2arr, setco2arr] = useState([]);
  const [dustarr, setdustarr] = useState([]);
  const [epocharr, setepocharr] = useState([]);
  const [etharr, setetharr] = useState([]);
  const [h2arr, seth2arr] = useState([]);
  const [humarr, sethumarr] = useState([]);
  const [latarr, setlatarr] = useState("");
  const [lonarr, setlonarr] = useState("");
  const [mq135arr, setmq135arr] = useState([]);
  const [o3arr, seto3arr] = useState([]);
  const [temparr, settemparr] = useState([]);
  const [vocarr, setvocarr] = useState([]);
  useEffect(() => {
    fireDb.child("Todo").on("value", (snapshot) => {
      const Tododata = snapshot.val();
      if (Tododata !== null){
        setData({...Tododata})
        console.log(Tododata)
        Object.entries(Tododata).forEach(element => {
          setco2arr(co2arr => [...co2arr, element[1].co2])
          setdustarr(dustarr => [...dustarr, element[1].dust])
          setepocharr(epocharr => [...epocharr, element[1].epoch])
          setetharr(etharr => [...etharr, element[1].eth])
          seth2arr(h2arr => [...h2arr, element[1].h2])
          sethumarr(humarr => [...humarr, element[1].hum])
          setlatarr(latarr)
          setlonarr(lonarr)
          setmq135arr(mq135arr => [...mq135arr, element[1].mq135])
          seto3arr(o3arr => [...o3arr, element[1].o3])
          settemparr(temparr => [...temparr, element[1].temp])
          setvocarr(vocarr => [...vocarr, element[1].voc])
        })
        // for(var lisobj of Object.entries(Tododata))
        // {
        //   // console.log(lisobj[1].eth)
        //   setco2arr(co2arr => [...co2arr, lisobj[1].co2])
        //   setdustarr(dustarr => [...dustarr, lisobj[1].dust])
        //   setepocharr(epocharr => [...epocharr, lisobj[1].epoch])
        //   setetharr(etharr => [...etharr, lisobj[1].eth])
        //   seth2arr(h2arr => [...h2arr, lisobj[1].h2])
        //   sethumarr(humarr => [...humarr, lisobj[1].hum])
        //   setlatarr(latarr => [...latarr, lisobj[1].lat])
        //   setlonarr(lonarr => [...lonarr, lisobj[1].lon])
        //   setmq135arr(mq135arr => [...mq135arr, lisobj[1].mq135])
        //   seto3arr(o3arr => [...o3arr, lisobj[1].o3])
        //   settemparr(temparr => [...temparr, lisobj[1].temp])
        //   setvocarr(vocarr => [...vocarr, lisobj[1].voc])
        // }
        console.log(epocharr)
      }else
      {
            setData({})
            setco2arr([])
            setdustarr([])
            setepocharr([])
            setetharr([])
            seth2arr([])
            sethumarr([])
            setlatarr("")
            setlonarr("")
            setmq135arr([])
            seto3arr([])
            settemparr([])
            setvocarr([])
      }
    });

    return () => {
      setData({});
    }

  }, []);

  const co2Line = {
    title: {
      text: 'Line chart'
    },
    xAxis: {
      categories: epocharr
    },
    colors: ['#FB8833'],
    series: [
      {
        name: 'Co2',
        data: co2arr.map(Number)
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
      categories: epocharr
    },
    colors: ['#FB8833'],
    series: [
      {
        name: 'Dust',
        data: dustarr.map(Number)
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
      categories: epocharr
    },
    colors: ['#FB8833', '#17A8F5'],
    series: [
      {
        name: 'Ethanol',
        data: etharr.map(Number)
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
      categories: epocharr
    },
    colors: ['#FB8833'],
    series: [
      {
        name: 'Sales',
        data: mq135arr.map(Number)
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
      categories: epocharr
    },
    colors: ['#FB8833'],
    series: [
      {
        name: 'Sales',
        data: o3arr.map(Number)
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
      categories: epocharr
    },
    colors: ['#FB8833', '#17A8F5'],
    series: [
      {
        name: 'Sales',
        data: temparr.map(Number)
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
      categories: epocharr
    },
    colors: ['#FB8833', '#17A8F5'],
    series: [
      {
        name: 'Sales',
        data: vocarr.map(Number)
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
      categories: epocharr
    },
    colors: ['#FB8833', '#17A8F5'],
    series: [
      {
        name: 'Sales',
        data: h2arr.map(Number)
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
      categories: epocharr
    },
    colors: ['#FB8833', '#17A8F5'],
    series: [
      {
        name: 'Sales',
        data: humarr.map(Number)
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