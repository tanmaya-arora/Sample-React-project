export const options = {
    title: {
      text: "Basic Column Chart in React"
    },
    dataPointWidth: 20,
    width: 400,
    data: [{				
      type: "column",
      dataPoints: [
        { label: "Apple",  y: 10  },
        { label: "Orange", y: 15  },
        { label: "Banana", y: 25  },
        { label: "Mango",  y: 30  },
        { label: "Grape",  y: 28  }
      ]
    }]
  }

export const splineOptions = {
    animationEnabled: true,
    title:{
        text: "Monthly Sales - 2017"
    },
    width: 400,
    axisX: {
        valueFormatString: "MMM"
    },
    axisY: {
        title: "Sales (in USD)",
        prefix: "$"
    },
    data: [{
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
            { x: new Date(2017, 0), y: 25060 },
            { x: new Date(2017, 1), y: 27980 },
            { x: new Date(2017, 2), y: 42800 },
            { x: new Date(2017, 3), y: 32400 },
            { x: new Date(2017, 4), y: 35260 },
            { x: new Date(2017, 5), y: 33900 },
            { x: new Date(2017, 6), y: 40000 },
            { x: new Date(2017, 7), y: 52500 },
            { x: new Date(2017, 8), y: 32300 },
            { x: new Date(2017, 9), y: 42000 },
            { x: new Date(2017, 10), y: 37160 },
            { x: new Date(2017, 11), y: 38400 }
        ]
    }]
};

export const pieOptions = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
        text: "Website Traffic Sources"
    },
    width: 400,
    data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: [
            { y: 18, label: "Direct" },
            { y: 49, label: "Organic Search" },
            { y: 9, label: "Paid Search" },
            { y: 5, label: "Referral" },
            { y: 19, label: "Social" }
        ]
    }]
}

const dataPoints1 = [
    { label: 'April 2023', y: 22 },
    { label: 'May 2023', y: 30 },
    { label: 'June 2023', y: 35 },
    { label: 'July 2023', y: 24 },
    { label: 'August 2023', y: 18 },
    { label: 'September 2023', y: 12 },
    { label: 'October 2023', y: 0 },
    // Add more data points as needed
  ];

  const dataPoints2 = [
    { label: 'April 2023', y: 17 },
    { label: 'May 2023', y: 30 },
    { label: 'June 2023', y: 34 },
    { label: 'July 2023', y: 27 },
    { label: 'August 2023', y: 15 },
    { label: 'September 2023', y: 9 },
    { label: 'October 2023', y: 4 },
    // Add more data points as needed
  ];

export const columnChartOptions = {
    animationEnabled: true,
      title: {
        text: 'Bar Chart with 2 Series',
      },
      axisY: {
        title: 'Values',
      },
      axisX: {
        title: 'Categories',
      },
      data: [
        {
          type: 'bar',
          name: 'Income',
          showInLegend: true,
          dataPoints: dataPoints1,
        },
        {
          type: 'bar',
          name: 'Expense',
          showInLegend: true,
          dataPoints: dataPoints2,
        },
      ]
  }