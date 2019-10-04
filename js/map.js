var baseUrl = 'https://dr.beilequan.com';
var nowclick = 0;
var nowname = '';

var provinceAll = []; //所有省级信息
var chinaData = { "北京": 100, "天津": 99, "河北": 98, "山西": 10, "内蒙古": 20, '湖南': 100 }; //省数据
var sityData = { "呼和浩特": 100, "包头": 100 }; //市区数据

function updateChinaData() {
    //此处获取省份数据
    chinaData = getProvinceNum();
    //console.log(chinaData,'chinaData');
    //更新chinaData=....数据格式如上
    setditu("container2");
}
//请求省级热力图--ajax
function getProvinceNum() {
    let api = baseUrl + '/api/province_list';
    $.get(api, function(res) {
        //console.log(res);
        provinceAll = res.result;
        let provinceData = {}
        provinceAll.forEach(item => {
            provinceData[item.province_name] = item.province_count;
        });
        console.log('省级热力图数据', provinceData);

        chinaData = provinceData; //更新省级图数据

        return provinceData
    });
}
// getProvinceNum(); //完成省级热力图生成
//获取地图省份数据 -- 生成热力图
updateChinaData();


//更新地图市区数据 provinceAll--省份 callback--回调
function updateSityDaty(provinceName, callback) {
    // provinceFilter = provinceAll
    let provinceFilter = provinceAll.filter(item => {
        return item.province_name == provinceName;
    });
    //console.log(provinceFilter,'点击的省级信息');
    //console.log(provinceName);
    if (provinceFilter.length == 0) { //空数组则不发送ajax请求
        return
    } else {
        // sityData = {"呼和浩特":50,"包头":50};//市区数据
        let api = baseUrl + '/api/detailed_province/' + provinceFilter[0].province_id;
        $.get(api, res => {
            let cityData = {}
                //console.log('ajax请求的市级数据',res);
            res.forEach(item => {
                cityData[item.city_name] = item.city_count;
            });
            //console.log('处理完的市级数据',cityData);
            sityData = cityData; //更新市级数据

        });
        //更新数据后回调
        callback();
    }

};

function setditu(id) {

    Highcharts.setOptions({
        lang: {
            drillUpText: '< 返回 “{series.name}”',
            resetZoom: '缩放'
        }
    });


    var width = $('#' + id).css("width");
    width = parseInt(width.substring(0, width.indexOf("px")));
    //console.log(width);
    var map = null,
        geochina = 'https://data.jianshukeji.com/jsonp?filename=geochina/';
    $.getJSON(geochina + 'china.json&callback=?', function(mapdata) {
        var data = [];
        // 随机数据
        Highcharts.each(mapdata.features, function(md, index) {
            var tmp = {
                name: md.properties.name,
                //value: Math.floor((Math.random() * 100) + 1) // 生成 1 ~ 100 随机值
                value: chinaData[md.properties.name] == undefined ? 0 : chinaData[md.properties.name]
            };
            if (md.properties.drilldown) {
                tmp.drilldown = md.properties.drilldown;
            }
            data.push(tmp);
            // //console.log('地图数据',data,data.length);


        });


        map = new Highcharts.Map(id, {
            chart: {
                events: {
                    drilldown: function(e) {
                        this.tooltip.hide();
                        // 异步下钻
                        if (e.point.drilldown) {
                            var pointName = e.point.properties.name;
                            //console.log('市级',e.point.properties);


                            nowclick++;
                            if (nowclick % 2 != 0) {
                                nowname = pointName;
                                return;
                            }
                            if (nowname != pointName) {
                                nowname = pointName;
                                nowclick = 1;
                                return;
                            }
                            // 获取二级行政地区数据并更新图表
                            updateSityDaty(pointName, function() {
                                $.getJSON(geochina + e.point.drilldown + '.json&callback=?', function(data) {
                                    data = Highcharts.geojson(data);
                                    //console.log('市级数据',data);
                                    Highcharts.each(data, function(d) {
                                        if (d.properties.drilldown) {
                                            d.drilldown = d.properties.drilldown;
                                        }
                                        d.value = sityData[d.name] == undefined ? 0 : sityData[d.name]
                                    });
                                    map.hideLoading();
                                    map.addSeriesAsDrilldown(e.point, {
                                        name: e.point.name,
                                        data: data,
                                        dataLabels: {
                                            enabled: false,
                                            format: '{point.name}'
                                        }
                                    });
                                    map.setTitle({
                                        text: pointName
                                    });
                                });
                            });


                        }
                    },
                    drillup: function() {
                        map.setTitle({
                            text: '中国'
                        });
                    }
                },

            },

            title: {
                text: '中国地图',

            },
            subtitle: {
                useHTML: true,
                text: ''
            },

            //设置功能
            mapNavigation: {
                enabled: true,
                enableTouchZoom: true, // 在开启导航器的情况下关闭移动端手势操作
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            tooltip: {
                useHTML: true,
                hideDelay: 3000,
                headerFormat: '<table ><tr><td>{point.name}</td></tr>',
                pointFormat: '<tr><td>地区</td><td>{point.properties.name}</td></tr>' +
                    // '<tr><td>行政编号:</td><td>{point.properties.areacode}</td></tr>' +
                    // '<tr><td>父级:</td><td>{point.properties.parent}</td></tr>' +
                    '<tr><td>人数:</td><td>{point.value}</td></tr>',

                footerFormat: '</table>',


                //
                positioner: function() {
                    return { x: 0.73 * width, y: 250 };
                }
            },

            colorAxis: {
                min: 0,
                max: 1000000,
                minColor: 'rgb(255,255,255)',
                maxColor: '#cc1c15',
                labels: {
                    style: {
                        "background color": "#996544",
                        "color": "#996544",
                        "fontWeight": "bold"
                    }
                }
            },
            //显示地图省份
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false,
                        allowOverlap: true, //是否显示全部省 自治区 
                        // format: '{point.properties.fullname}',
                        format: '{point.properties.name}',
                        style: {
                            "background color": "#996544",
                            "color": "#996544",
                            "fontSize": "5px",
                            "fontWeight": "400",
                            "textOutline": "1px 1px contrast"
                        }
                        //map.showLoading('下钻中，请稍后...')
                    }
                }
            },
            series: [{
                data: data,
                mapData: mapdata,
                joinBy: 'name',
                name: '中国地图',
                states: {
                    hover: {
                        color: 'Turquoise'
                    }
                },

            }]

        });
    });
}





// var maxNum = 1000000;
// //获取热力图最大值
// function getHermodynamic_chart_max(){
//     let api = '/api/hermodynamic_chart_max';
//     $.get(api,res=>{
//         //console.log('获取热力图最大值',res);
//         maxNum = res
//     });
// }
// getHermodynamic_chart_max();