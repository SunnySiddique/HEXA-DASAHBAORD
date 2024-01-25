import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChat = () => {
    const [state, setState] = useState({
        series: [{
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
            show: false  // Set to false to hide this series
          },
          {
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
          },
          {
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [5, 7, 5],
            curve: 'straight',
            dashArray: [0, 8, 5]
          },
          title: {
            text: "",
            align: 'left'
          },
          legend: {
            tooltipHoverFormatter: function(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: ['Jan', 'Fab', 'May', 'Jun', 'Jul', 'Age', 'Sep', 'Oct', 'Nev',
              'Dec', '', ''
            ],
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val + " (mins)"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val + " per session"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  }
                }
              }
            ]
          },
          grid: {
            borderColor: '#f1f1f1',
          }
        },
      
    });
  return (
    <div>
        <ReactApexChart options={state.options} series={state.series} type="line" height={267} />

    </div>
  )
}

export default LineChat
