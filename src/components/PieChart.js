import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ data }) => {
  const options = {
    chart: {
      type: 'pie',
    },
    labels: data.labels,
  };

  const series = data.series;

  return (
    <Chart
      options={options}
      series={series}
      type="pie"
      height="350"
    />
  );
};

export default PieChart;