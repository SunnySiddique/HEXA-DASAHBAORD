import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const RadiaBar = () => {
    const [state, setState] = useState({
        series: [44, 55, 67, 83],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: '60%',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return "Completed"
                  }
                }
              }
            }
          },
          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        },
      
    });
  return (
    <div>
        <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} />

    </div>
  )
}

export default RadiaBar
