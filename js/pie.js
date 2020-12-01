// 饼图
(function() {
    const myChart = echarts.init(document.querySelector('.pie .chart'));
    const option = {
        // color可以在option下写，也可以写在series里面
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            top: 'bottom',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            // 修改字体颜色
            textStyle: {
                color: "#fff"
            },
            itemWidth: 20,
            // 不允许改变图形模式（点击显示）
            selectedMode: false
        },
        grid: {
            bottom: '5%',
            top: 0

        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                // position: 'inside',
                // normal: {
                //     formatter: '{c}%',
                //     position: 'inside'
                // }
            },
            emphasis: {
                label: {
                    show: false,
                    // fontSize: '30',
                    // fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();

// 饼状图2
(function() {
    const myChart = echarts.init(document.querySelector('.pie2 .chart'));
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            bottom: "0%",
            // data: ['广东', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
            // data: ['云南',
            //     '北京',
            //     '山东',
            //     '河北',
            //     '江苏',
            //     '浙江',
            //     '四川',
            //     '湖北'
            // ],
            textStyle: {
                color: "#fff",
                fontSize: "12"
            },
            itemWidth: 10,

        },

        series: [{
            name: '人口发布',
            type: 'pie',
            // 内半径，外半径
            radius: ['10%', '80%'],
            center: ['50%', '50%'],
            roseType: 'area',
            labelLine: {
                length: 5,
                length2: 5
            },
            data: [
                { value: 20, name: '云南' },
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 25, name: '河北' },
                { value: 20, name: '江苏' },
                { value: 25, name: '浙江' },
                { value: 30, name: '四川' },
                { value: 42, name: '湖北' }
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();