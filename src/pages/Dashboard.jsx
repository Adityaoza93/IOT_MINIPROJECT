import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import fireDb from "../firebase"

const LineChartOptions = {
  title: {
    text: 'Line chart'
  },
  xAxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  },
  colors: ['#FB8833', '#17A8F5'],
  series: [
    {
      name: 'Sales',
      data: [21, 35, 75, 51, 41, 47]
    },
    {
      name: 'Leads',
      data: [41, 79, 57, 47, 63, 71]
    }
  ],
  credits: {
    enabled: false
  }
}

const BarChartOptions = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Bar Chart'
  },
  xAxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  },
  colors: ['#FB8833', '#17A8F5'],
  series: [
    {
      name: 'Sales',
      data: [21, 35, 75, 51, 41, 47]
    },
    {
      name: 'Leads',
      data: [41, 79, 57, 47, 63, 71]
    }
  ],
  credits: {
    enabled: false
  }
}

export default function Dashboard() {


  const [data, setData] = useState({});

  useEffect(() => {
    fireDb.child("Todo").on("value", (snapshot) => {
      const Tododata = snapshot.val();
      if (Tododata !== null){
        setData({...Tododata})
        console.log(Tododata)
        for(var lisobj of Object.entries(Tododata))
        {
          console.log(lisobj)
        }
      }else{
        setData({});
      }
    });

    return () => {
      setData({});
    }

  }, []);
  return (
    // <><div className="row">
    //   <div className="col-md-12">
    //     <h2>Dashboard</h2>
    //   </div>

    //   <div className="section col-md-6">
    //     <h3 className="section-title">Line Chart</h3>
    //     <div className="section-content">
    //       <HighchartsReact
    //         highcharts={Highcharts}
    //         options={LineChartOptions} />
    //     </div>
    //   </div>

    //   <div className="section col-md-6">
    //     <h3 className="section-title">Line Chart</h3>
    //     <div className="section-content">
    //       <HighchartsReact
    //         highcharts={Highcharts}
    //         options={LineChartOptions} />
    //     </div>
    //   </div>

    // </div><div className="row">
    //     <div className="col-md-12">
          
    //     </div>

    //     <div className="section col-md-6">
    //       <h3 className="section-title">Line Chart</h3>
    //       <div className="section-content">
    //         <HighchartsReact
    //           highcharts={Highcharts}
    //           options={LineChartOptions} />
    //       </div>
    //     </div>

    //     <div className="section col-md-6">
    //       <h3 className="section-title">Line Chart</h3>
    //       <div className="section-content">
    //         <HighchartsReact
    //           highcharts={Highcharts}
    //           options={LineChartOptions} />
    //       </div>
    //     </div>

    //   </div>
    //   <div className="row">
    //   <div className="col-md-12">
        
    //   </div>
      
    //   <div className="section col-md-6">
    //     <h3 className="section-title">Line Chart</h3>
    //     <div className="section-content">
    //       <HighchartsReact
    //         highcharts={Highcharts}
    //         options={LineChartOptions}
    //       />
    //     </div>
    //   </div>

    //   <div className="section col-md-6">
    //     <h3 className="section-title">Line Chart</h3>
    //     <div className="section-content">
    //       <HighchartsReact
    //         highcharts={Highcharts}
    //         options={LineChartOptions}
    //       />
    //     </div>
    //   </div>

    // </div>
    // <div className="row">
    //   <div className="col-md-12">
        
    //   </div>
      
    //   <div className="section col-md-6">
    //     <h3 className="section-title">Line Chart</h3>
    //     <div className="section-content">
    //       <HighchartsReact
    //         highcharts={Highcharts}
    //         options={LineChartOptions}
    //       />
    //     </div>
    //   </div>

    //   <div className="section col-md-6">
    //     <h3 className="section-title">Line Chart</h3>
    //     <div className="section-content">
    //       <HighchartsReact
    //         highcharts={Highcharts}
    //         options={LineChartOptions}
    //       />
    //     </div>
    //   </div>

    // </div>
    // <div className="row">
    //   <div className="col-md-12">
        
    //   </div>
      
    //   <div className="section col-md-6">
    //     <h3 className="section-title">Line Chart</h3>
    //     <div className="section-content">
    //       <HighchartsReact
    //         highcharts={Highcharts}
    //         options={LineChartOptions}
    //       />
    //     </div>
    //   </div>
    //   </div>
    //   </>


    <div>
      <table>
        <thead>
          <tr>
            <th>epoch</th>
            <th>co2</th>
            <th>dust</th>
            <th>eth</th>
            <th>h2</th>
            <th>hum</th>
            <th>lat</th>
            <th>lon</th>
            <th>mq135</th>
            <th>o3</th>
            <th>temp</th>
            <th>voc</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            <tr key={id}>
              <th scope='row'>{ index + 1 }</th>
              <td>{data[id].epoch}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}