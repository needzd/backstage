<template>
    <div class="container-fluid">
        <div class="row">
            <div class="alertbox">
                <div class="box col-xs-12 col-sm-12 col-md-6">
                    <div class="linebox">
                        <h4>BAR CHART EXAMPLE</h4>
                        <div id="line-1">
                        </div>
                    </div>
                </div>
                <div class="box col-xs-12 col-sm-12 col-md-6">
                    <div class="linebox">
                        <h4>AREA CHART</h4>
                        <div id="line-2">
                        </div>
                    </div>
                </div>
                <div class="box col-xs-12 col-sm-12 col-md-6">
                    <div class="linebox">
                        <h4>BAR CHART EXAMPLE</h4>
                        <div id="line-3">
                        </div>
                    </div>
                </div>
                <div class="box col-xs-12 col-sm-12 col-md-6">
                    <div class="linebox">
                        <h4>AREA CHART</h4>
                        <div id="line-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>               
</template>

<script>
    import contentzhuxing from "../dashboard/contentzhuxing";
    import echarts from 'echarts'

    export default {
        components:{
            contentzhuxing
        },
        mounted(){
            this.drawLine1();
            this.drawLine2();
            this.drawLine3();
            this.drawLine4();
        },
        methods: {
            drawLine1(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('line-1'));  
            myChart.setOption({
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'none' 
                            }
                        },
                        legend: {
                            data: ['2006','2007','2008','2009', '2010','2011', '2012'],
                            align: 'right',
                            right: 10
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [{
                            type: 'category',
                            data: ['2006','2007','2008','2009', '2010','2011', '2012'],
                            "axisTick": {
                                "show": false
                            },
                            "axisLabel": {
                                interval:1
                            },
                            "axisLine":{ 
                                lineStyle: {
                                    color:"#ccc"
                                }
                            },
                        }],
                        yAxis: [{
                            "axisLine":{       
                                "show":false
                            },
                            "axisTick": {
                                "show": false
                            },
                        }],
                        series: [{
                            name: 'Series A',
                            type: 'bar',
                            data: [80, 72, 51, 64, 41,75,91]
                        }, {
                            name: 'Series B',
                            type: 'bar',
                            data: [30, 20, 50, 39, 73,65,59]
                        }]
                }) 
            },
            drawLine2(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('line-2'));  
            myChart.setOption({
                tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'none'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {   
                            "axisTick": {
                                "show": false
                            },
                            "axisLine":{     
                                "show":false
                            },
                            "axisLabel": {
                                interval:3
                            },
                            type : 'category',
                            boundaryGap : false,
                            data : ['2010-03','2010-06','2010-09','2010-12','2011-03','2011-06','2011-09','2011-09','2011-12','2012-03','2012-06']
                        }
                    ],
                    yAxis : [
                        {   
                            "axisTick": {
                                "show": false
                            },
                            "axisLine":{       
                                "show":false
                            },
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'iPone 4',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[30,60,75,84,120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'iPod',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[90,105,199,230,220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'iPod Touch',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[50,80,85,120,150, 232, 201, 154, 190, 330, 410]
                        },
                    ]
                }) 
            },
            drawLine3(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('line-3'));  
            myChart.setOption({
                xAxis: {
                    "axisTick": {
                        "show": false
                    },
                    "axisLabel": {
                            interval:1
                    },
                    "axisLine": {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020','2021','2022','2023','2024']
                    },
                    yAxis: {
                        min:0,
                        max:200,
                        "axisTick": {
                            "show": false
                        },
                        type: 'value',
                        "axisLine":{       
                            "show":false
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'none'
                        }
                    },
                    series: [{
                        name:"Toal In",
                        data: [50, 112, 90, 100, 120, 110, 130,150,180,198,150],
                        type: 'line',
                        symbolSize: 12,
                    },
                    {   
                        name:"Toal Out",
                        data: [90, 120, 110, 180, 137, 161, 113,160,170,180,185],
                        type: 'line',
                        symbolSize: 12,
                    }]
                }) 
            },
            drawLine4(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('line-4'));  
            var ydata = [{name: 'Users',value: 48},{name: 'Total Sales',value: 19},{name: 'Profits',value: 33}];
            var color =["#414E63", "#E96562","#A6A6A6"]
            myChart.setOption({
                    backgroundColor: "rgba(255,255,255,1)",
                    borderWidth: 5,
                    color:color,
                    series: [{
                        type: 'pie',
                        clockwise: false, //饼图的扇区是否是顺时针排布
                        startAngle: -30,
                        minAngle: 20, //最小的扇区角度（0 ~ 360）
                        radius: ["50%", "68%"],
                        center: ["50%", "50%"],
                        itemStyle: { //图形样式
                            normal: {
                                borderColor: '#ffffff',
                                borderWidth: 5,
                            },
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'center',
                                formatter: '{text|{b}}\n{value|{d}}',
                                rich: {
                                    text: {
                                        color: "#000",
                                        fontSize: 24,
                                        align: 'center',
                                        height:50,
                                        fontWeight:600,
                                        verticalAlign: 'middle',
                                        padding: 5                    
                                    },
                                    value: {
                                        color: "#000",
                                        fontSize: 20,
                                        fontWeight:600,
                                        align: 'center',
                                        verticalAlign: 'middle',
                                    },
                                }
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: 46,
                                }
                            }
                        },
                        data: ydata
                    }]
                })
                
                setTimeout(function() {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });

                    myChart.on('mouseover', function(params) {
                        if (params.name == ydata[0].name) {
                            myChart.dispatchAction({
                                type: 'highlight',
                                seriesIndex: 0,
                                dataIndex: 0
                            });
                        } else {
                            myChart.dispatchAction({
                                type: 'downplay',
                                seriesIndex: 0,
                                dataIndex: 0
                            });
                        }
                    });

                    myChart.on('mouseout', function(params) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    });
                }, 1000);
            }

        }
    }
</script>

<style scoped>
.box{
    margin-bottom: 30px;
}
.linebox{
    background: #fff;
    padding-bottom: 20px;
    margin: auto;
}
#line-1{
    height: 350px;
}
#line-2{
    height: 350px;
}
#line-3{
    height: 350px;
}
#line-4{
    height: 350px;
}
.linebox h4{
    font-size: 14px;
    font-weight: 600;
    padding: 20px 20px 0 20px;
    border-top: 1px solid rgba(160,160,160,0.2);
}
/* .alertbox{
    padding: 20px;
} */
</style>
