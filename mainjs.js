 
let options = {
  series: [{
  data: [2, 1, 3, 5, 2]
}],
  chart: {
  type: 'bar',
  height: 500,
  width: 500
},
plotOptions: {
  bar: {
    borderRadius: 10,
    borderRadiusApplication: 'end',
    horizontal: true,
    barHeight: '50%',
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories: ['Customer', 'Exucative', 'StackHolder', 'Team',"Coach" ],
  title: {
    text: 'Rating'
},

},
yaxis: {
  title: {
    text: 'Role'
}},
grid: {
  row: {
      colors: [ 'transparent'],
      opacity: 0.5
  }, 
  column: {
      colors: ['transparent'],
  }, 
  xaxis: {
    lines: {
      show: true
    }
  }
},
};

let chart = new ApexCharts(document.querySelector("#chart-container2"), options);
chart.render();
console.log(chart)


document.addEventListener("DOMContentLoaded", function () {
  var options = {
    chart: {
      height: 350,
      type: 'line',
    },
    plotOptions: {
        bar: {
          borderRadius: 10,
          borderRadiusApplication: 'end',
          horizontal: false,
          barHeight: '50%',
        }
      },
    stroke: {
      width: [1, 2],
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1]
    },
    series: [{
      name: 'Months',
      type: 'column',
      range:200,
      data: [40, 40, 20, 120, 90]
    }, {
      name: 'NPS',
      type: 'line',
      data:   [0, 11, 25, 30, 44, 50, 65, 70, 60,70,80,90],
      color: "black"

    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','oct',"Nov","Dec"],
      title: {
            text: 'Months'
        },
    },
    yaxis: [ {
      range:200,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#000'
      },
      labels: {
        style: {
          colors: '#000',
        }
      },
      title: {
        text: "x Axis Lable",
        style: {
          color: '#000',
        }
      },
     
    },  ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    
  };

  var chart = new ApexCharts(document.querySelector("#chart-container"), options);

  chart.render();
});
