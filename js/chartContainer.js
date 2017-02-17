// 第五页  持久的热情超越
function  chartRate(data,size) {
data =data/1;
    var gaugeOptions = {
        chart: {
            type: 'solidgauge',
            backgroundColor: 'rgba(255,255,255,0)',
        },
        title: null,
        pane: {
            center: ['50%', '100%'],
            size: '160%',
            startAngle: -90,
            endAngle: 90,
            background: {
                borderWidth: 0,
                backgroundColor: 'rgba(13,192,248,.3)',
                innerRadius: '85%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },
        yAxis: {
            stops: [
                [1, '#0dc0f8'],
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 100,
            }
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 13,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    $('.chartContainer').highcharts(Highcharts.merge(gaugeOptions, {

        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: ' '
            },
            style: {
                background: 'rgba(255,255,255,0)'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: ' ',
            data: [{
                radius: '85%',
                innerRadius: '100%',
                y: data
            }],
            dataLabels: {
                format: '<div style="text-align:center;font-size:20px;color:#0dc0f8"><span style="font-size:'+size+'px;">{y}</span>%</div>'
            },
            tooltip: {
                valueSuffix: ''
            }
        }]
    }));


}





// 第四页
// （我的大赛总排名曲线）

function Historicaltracing(data,h) {

    $('.lineImg').highcharts({
        chart: {
            type: 'line',
            height: h,
            backgroundColor: 'transparent',
            marginLeft: 35,
            marginRight: 15,
        },
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        xAxis: {
            lineWidth: 0,
            // categories: xAxisData(x),
            labels: {
                style: {
                    color: 'rgba(255,255,255,0)',
                    fontSize: 8,
                },
            },
            tickWidth: 0,
            // tickInterval: step,
        },
        yAxis: {
              max: 100,
              min: 0,
            title: {
                text: ''
            },
            // tickAmount: 4,
            gridLineWidth: 1,
            gridLineDashStyle: 'ShortDash',
            gridLineColor: 'rgba(255,255,255,.1)',
            labels: {
                formatter: function() {//y 轴刻度线
                    return (100-this.value)+'%';
                },
                x: -2,
                y: -2,
                style: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: 8,
                    'text-align': 'center',
                },
                overflow: 'justify'
            }
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                },
                marker: {
                    enabled: false,

                },
                overflow: 'justify',
                enableMouseTracking: false,
            },
            series: {
                dataLabels: {
                    enabled: false, //显示点上面的数字
                },
                marker: {
                    enabled: false, //显示点的布尔值
                },
                lineWidth: 1,
                // fillColor: 'rgba(255,255,255,.12)',
            }
        },
        series: [{
            data:  data,
        }]
    });

}


