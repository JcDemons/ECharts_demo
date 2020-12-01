(function() {
    var myChart = echarts.init(document.querySelector('.map .chart'));

    //各省份的地图json文件
    var provinces = {
        '上海': '../map/province/shanghai.json',
        '河北': '../map/province/hebei.json',
        '山西': '../map/province/shanxi.json',
        '内蒙古': '../map/province/neimenggu.json',
        '辽宁': '../map/province/liaoning.json',
        '吉林': '../map/province/jilin.json',
        '黑龙江': '../map/province/heilongjiang.json',
        '江苏': '../map/province/jiangsu.json',
        '浙江': '../map/province/zhejiang.json',
        '安徽': '../map/province/anhui.json',
        '福建': '../map/province/fujian.json',
        '江西': '../map/province/jiangxi.json',
        '山东': '../map/province/shandong.json',
        '河南': '../map/province/henan.json',
        '湖北': '../map/province/hubei.json',
        '湖南': '../map/province/hunan.json',
        '广东': '../map/province/guangdong.json',
        '广西': '../map/province/guangxi.json',
        '海南': '../map/province/hainan.json',
        '四川': '../map/province/sichuan.json',
        '贵州': '../map/province/guizhou.json',
        '云南': '../map/province/yunnan.json',
        '西藏': '../map/province/xizang.json',
        '陕西': '../map/province/shanxi.json',
        '甘肃': '../map/province/gansu.json',
        '青海': '../map/province/qinghai.json',
        '宁夏': '../map/province/ningxia.json',
        '新疆': '../map/province/xinjiang.json',
        '北京': '../map/province/beijing.json',
        '天津': '../map/province/tianjin.json',
        '重庆': '../map/province/chongqing.json',
        '香港': '../map/province/xianggang.json',
        '澳门': '../map/province/aomen.json'
    };

    //各省份的数据
    var allData = [{
        name: '北京'
    }, {
        name: '天津'
    }, {
        name: '上海'
    }, {
        name: '重庆'
    }, {
        name: '河北'
    }, {
        name: '河南'
    }, {
        name: '云南'
    }, {
        name: '辽宁'
    }, {
        name: '黑龙江'
    }, {
        name: '湖南'
    }, {
        name: '安徽'
    }, {
        name: '山东'
    }, {
        name: '新疆'
    }, {
        name: '江苏'
    }, {
        name: '浙江'
    }, {
        name: '江西'
    }, {
        name: '湖北'
    }, {
        name: '广西'
    }, {
        name: '甘肃'
    }, {
        name: '山西'
    }, {
        name: '内蒙古'
    }, {
        name: '陕西'
    }, {
        name: '吉林'
    }, {
        name: '福建'
    }, {
        name: '贵州'
    }, {
        name: '广东'
    }, {
        name: '青海'
    }, {
        name: '西藏'
    }, {
        name: '四川'
    }, {
        name: '宁夏'
    }, {
        name: '海南'
    }, {
        name: '台湾'
    }, {
        name: '香港'
    }, {
        name: '澳门'
    }];

    for (var i = 0; i < allData.length; i++) {
        allData[i].value = Math.round(Math.random() * 100); //为每个省份生成一个随机整数数值
        // console.log(allData[i]);
    }


    loadMap('../map/china.json', 'china'); //初始化全国地图

    var timeFn = null;

    //单击切换到省级地图，当mapCode有值,说明可以切换到下级地图
    myChart.on('click', function(params) {
        clearTimeout(timeFn);
        //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
        timeFn = setTimeout(function() {
            var name = params.name; //地区name
            var mapCode = provinces[name]; //地区的json数据
            if (!mapCode) {
                alert('三级下钻暂时还没实现');
                return;
            }

            loadMap(mapCode, name);

        }, 250);
    });


    // 绑定双击事件，返回全国地图
    myChart.on('dblclick', function(params) {
        //当双击事件发生时，清除单击事件，仅响应双击事件
        clearTimeout(timeFn);

        //返回全国地图
        loadMap('../map/china.json', 'china');
    });

    /**
     获取对应的json地图数据，然后向echarts注册该区域的地图，最后加载地图信息
     @params {String} mapCode:json数据的地址
     @params {String} name: 地图名称
     */
    function loadMap(mapCode, name) {
        $.get(mapCode, function(data) {
            if (data) {
                echarts.registerMap(name, data);
                var option = {
                    title: {
                        text: '中国地图二级下钻（双击返回全国地图）',
                        textStyle: { color: "#fff" },
                        top: "5%",
                        left: "center"
                    },
                    tooltip: {
                        show: true,
                        formatter: function(params) {
                            if (params.data) return params.name + '：' + params.data['value']
                        },
                    },
                    visualMap: {
                        type: 'continuous',
                        text: ['', ''],
                        showLabel: true,
                        left: '50',
                        min: 0,
                        max: 100,
                        inRange: {
                            color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096', ]
                        },
                        splitNumber: 0,
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    series: [{
                        name: 'MAP',
                        type: 'map',
                        mapType: name,
                        center: ['50%', '50%'],
                        selectedMode: 'false', //是否允许选中多个区域
                        label: {
                            normal: {
                                show: true,
                                color: '#000'
                            },
                            emphasis: {
                                show: true
                            }
                        },

                        data: allData
                    }]
                };
                myChart.setOption(option);
                // curMap = {
                //     mapCode: mapCode,
                //     mapName: name
                // };
            } else {
                alert('无法加载该地图');
            }
        });
    }
})();