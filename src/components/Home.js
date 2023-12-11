import CanvasJSReact from '@canvasjs/react-charts';
import { columnChartOptions, options, pieOptions, splineOptions } from './Chartoptions';
import PieChart from './PieChart';
import { useEffect, useState } from 'react';

const Home = () => {
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const pieChartData = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    series: [30, 40, 30],
  };

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const updateScreenSize = () => {
    setInnerWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize)
  });

  return (
    <>
    {innerWidth > 946 ? (
    <>
    <div className="App">
      <CanvasJSChart options = {options} />
      <CanvasJSChart options = {splineOptions} />
      
    </div>
    <div className='App'>
      <CanvasJSChart options = {pieOptions} />
      <CanvasJSChart options = {columnChartOptions} />
    </div>
    </>) : (
    <>
    <div><CanvasJSChart options = {options} /></div>
    <div><CanvasJSChart options = {splineOptions} /></div>
    <div><CanvasJSChart options = {pieOptions} /></div>
    <div><CanvasJSChart options = {columnChartOptions} /></div>
    </>)}
    <div>
      <h1>Responsive Pie Chart with React ApexCharts</h1>
      <PieChart data={pieChartData} />
    </div>
    <a href='/toastify-demo' className='d-flex j-content-center'>Click here to check the demo of react-toastify</a>
    </>
  )
}

export default Home;