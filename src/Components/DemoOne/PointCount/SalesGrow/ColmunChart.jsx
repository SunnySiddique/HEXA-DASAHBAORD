import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ColumnChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [10, 25, 15, 13, 19, 32],
      },
      {
        name: 'Revenue',
        data: [17, 12, 8, 5, 7, 26],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['1-5', '6-10', '11-15', '16-20', '21-25', '26-30'],
      },
      yaxis: {

      },
      fill: {
        opacity: 1,
        colors: ['rgb(130, 49, 211)', '#2196F3'], // Specify the colors for each series
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  return (
    <div>
      <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
    </div>
  );
};

export default ColumnChart;
