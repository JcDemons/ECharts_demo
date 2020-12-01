// 折线图
(function() {

    //替换年的数据（一般通过ajax请求进行数据渲染，页面渲染刷新）
    var yearData = [{
            year: '2020', // 年份
            data: [ // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021', // 年份
            data: [ // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];


    // 实例对象
    const myChart = echarts.init(document.querySelector('.line .chart'));

    // 配置
    const option = {
        color: ['#f40', '#00f'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告'],
            textStyle: {
                color: "#0ff"
            },
            right: '3%'
        },
        grid: {
            left: '3%',
            right: '3%',
            top: '15%',
            bottom: '4%',
            containLabel: true,
            borderColor: '#012f4a'
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                show: true,
                color: "rgba(255,255,255,.6)",
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                color: "rgba(255,255,255,.6)",
                fontSize: 12
            },
            axisLine: {
                opacity: 0.2
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    opacity: 0.2
                }
            }
        },
        series: [{
                name: '邮件营销',
                type: 'line',
                smooth: true,
                data: yearData[0].data[0],
            },
            {
                name: '联盟广告',
                type: 'line',
                smooth: true,
                data: yearData[0].data[1],

            }
        ]
    };


    // 将配置给实例化对象
    myChart.setOption(option);
    // 自动缩放
    window.addEventListener('resize', function() {
        myChart.resize();
    });


    var a = document.querySelectorAll('.line a');
    for (let i = 0; i < a.length; i++) {
        a[i].onclick = function() {
            // 也可以通过索引值来进行更改数据
            // 第一个a标签对用第一组数据，一次类推
            // 根据年份局限性较大，年份一改就得重新修改代码
            /*  if (this.text == '2020') {
                 option.series[0].data = yearData[0].data[0];
                 option.series[1].data = yearData[0].data[1];
                 console.log(this.index());
                 // console.log(option.series[0].data);
                 // console.log(option.series[1].data);
                 myChart.setOption(option);

             } else if (this.text == '2021') {
                 option.series[0].data = yearData[1].data[0];
                 option.series[1].data = yearData[1].data[1];
                 // console.log(option.series[0].data);
                 // console.log(option.series[1].data);
                 myChart.setOption(option);
             } */
            option.series[0].data = yearData[i].data[0];
            option.series[1].data = yearData[i].data[1];
            myChart.setOption(option);

        }
    }




})();



//折线图2
// 折线图
(function() {
    // 实例对象
    const myChart = echarts.init(document.querySelector('.line2 .chart'));
    // 配置
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告'],
            type: 'scroll',
            textStyle: {
                color: "#0ff"
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '15%',
            bottom: '4%',
            containLabel: true
        },

        xAxis: {
            type: 'category',
            // 去除轴内边距
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                show: true,
                color: "rgba(255,255,255,.6)",
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                color: "rgba(255,255,255,.6)",
                fontSize: 12

            },
            // y轴坐标线
            axisLine: {
                show: true,
                opacity: 0.2
            },
            // 坐标刻度
            axisTick: {
                show: false
            },
            // 坐标分割线
            splitLine: {
                lineStyle: {
                    opacity: 0.2
                }
            }
        },
        series: [{
                name: '邮件营销',
                type: 'line',
                // 添加stack会导致数据叠加
                // stack: '总量',
                smooth: true,
                data: [132, 101, 134, 190, 230, 210, 192, 101, 141, 132, 101, 134],
                // 修改线的颜色也可以在option下建立数组来改多个
                // itemStyle也可以来设置拐点的颜色
                itemStyle: {
                    color: '#08fcee',
                    borderColor: "rgba(255,255,222,0.3)",
                    borderWidth: "5"
                },
                lineStyle: {
                    // width: "3"
                },
                // 拐点
                symbol: 'circle',
                showSymbol: false,
                // 填充区域
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'yellow' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'blue' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            {
                name: '联盟广告',
                type: 'line',
                // 添加stack会导致数据叠加
                // stack: '总量',
                smooth: true,
                data: [120, 82, 191, 20, 290, 30, 310, 182, 191, 234, 290, 130, 110],
                itemStyle: {
                    color: '#0000ff',
                    borderColor: "rgba(255,255,222,0.3)",
                    borderWidth: "5",
                },
                lineStyle: {
                    // width: "3"
                },
                symbol: 'diamond',
                showSymbol: false,
                // 填充区域
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'red' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'green' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            }
        ]
    };
    // 将配置给实例化对象
    myChart.setOption(option);
    // 自动缩放
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();