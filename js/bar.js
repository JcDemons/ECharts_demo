// 柱状图
// 防止变量污染，使用立即执行函数
(function() {
    // 初始化实例对象
    const myChart = echarts.init(document.querySelector('.bar .chart'));
    const option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        grid: {
            left: '0%',
            right: '0%',
            top: '10%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                show: true,
                color: "rgba(255,255,255,.6)",
                fontSize: 12
            },
            axisLine: {
                true: false
            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: true,
                color: "rgba(255,255,255,.6)",
                fontSize: 12
            },
            axisLine: {
                true: false
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            // data数据可以通过ajax调用过来
            data: [110, 152, 200, 334, 1390, 330, 220],
            itemStyle: {
                barBorderRadius: 5,
                barCategoryGap: 15
            }
        }]
    };
    myChart.setOption(option);
    // 图标跟随屏幕的变化而变化
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();


// bar-column
(function() {
    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    // 初始化实例对象
    const myChart = echarts.init(document.querySelector('.bar-column .chart'));
    const option = {
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%",
            // containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        yAxis: [{
            type: 'category',
            data: ['html', 'Css', 'JavaScript', 'Node', 'Vue', 'Echarts'],
            //不显示y轴线条
            axisLine: {
                show: false,
            },
            // 不显示刻度
            axisTick: {
                show: false
            },
            // 坐标轴刻度标签
            axisLabel: {
                show: true,
                color: "#fff",
                fontSize: 12
            },
            // 翻转数据
            inverse: true
        }, {
            type: 'category',
            data: [702, 350, 610, 793, 664, 600],
            // 数据翻转
            inverse: true,
            //不显示y轴线条
            axisLine: {
                show: false,
            },
            // 不显示刻度
            axisTick: {
                show: false
            },
            // 坐标轴刻度标签
            axisLabel: {
                show: true,
                color: "#fff",
                fontSize: 12
            }
        }],
        series: [{
                name: '条',
                type: 'bar',
                data: [100, 90, 60, 70, 30, 10],
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                // 柱子设为圆角
                itemStyle: {
                    barBorderRadius: 20,
                    color: function(params) {
                        // params 是上面的六个柱子对象
                        // console.log(params);
                        return myColor[params.dataIndex]
                    }
                },
                // 图形上的文本标签
                label: {
                    normal: {
                        show: true,
                        // 图形内显示
                        position: "inside",
                        // 文字的显示格式
                        formatter: "{c}%"
                    }
                },
                // 显示层叠关系
                // 存在多个y轴的时候添加该属性会显示称层叠关系
                yAxisIndex: 0
            },
            {
                name: '框',
                type: 'bar',
                barWidth: 15,
                yAxisIndex: 1,

                barCategoryGap: 50,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 20

                },
                data: [100, 100, 100, 100, 100, 100]

            }
        ]
    };
    myChart.setOption(option);
    // 图标跟随屏幕的变化而变化
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();