<template>
    <div class="container-fluid">
        <div class="row row1">
            <div class="col-xs-12 col-sm-12 col-md-7">
                <div class="row">
                    <div class=" col-xs-12 col-sm-6 col-md-6">
                        <div class="ecbox">
                            <h4>Profit</h4>
                            <div id="rowechars1">        
                            </div>
                        </div>   
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="ecbox">
                            <h4>Profit</h4>
                            <div id="rowechars2">        
                            </div>
                        </div> 
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="ecbox">
                            <h4>Profit</h4>
                            <div id="rowechars3">        
                            </div>
                        </div> 
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="ecbox">
                            <h4>Profit</h4>
                            <div id="rowechars4">        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <contentbingxin/>
        </div>
        <div class="row row1">
            <contentzhexian/>
            <contentzhuxing/>
        </div>
        <div class="row row1">
            <contentbigzhexian/>
        </div>
        <contentbottom/>
    </div>
</template>

<script>
import echarts from 'echarts'
import contentbingxin from './contentbingxin'
import contentzhexian from "./contentzhexian"
import contentzhuxing from "./contentzhuxing"
import contentbigzhexian from "./contentbigzhexian"
import contentbottom from "./contentbottom"

export default {
    data () {
        return { }
    },
    components:{
        contentbingxin,
        contentzhexian,
        contentzhuxing,
        contentbigzhexian,
        contentbottom
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
        var myChart = echarts.init(document.getElementById('rowechars1')); 
        myChart.setOption({
                title: {
                text: '80%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#30A5FF',
                    fontSize: '26'
                }
                },
                color: ['rgba(234, 234, 234, 234)'], 
                series: [{
                    name: 'Line 1',
                    type: 'pie',
                    clockWise: true,
                    radius: ['90%', '80%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    hoverAnimation: false, 
                    data: [{
                        value: 80,
                        name: '01',
                        itemStyle: {
                            normal: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#30A5FF' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#30A5FF' // 100% 处的颜色
                                    }]
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            } 
                        }
                    }, {
                        name: '02',
                        value: 20
                    }]
                }]
            }) 
        },
        drawLine2(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('rowechars2'));   
        myChart.setOption({
                    title: {
                    text: '46%',
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        color: '#F9243F',
                        fontSize: '26'
                    }
                },
                color: ['rgba(234, 234, 234, 234)'], 
                series: [{
                    name: 'Line 1',
                    type: 'pie',
                    clockWise: true,
                    radius: ['90%', '80%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    hoverAnimation: false, 
                    data: [{
                        value: 46,
                        name: '01',
                        itemStyle: {
                            normal: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#F9243F' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#F9243F' // 100% 处的颜色
                                    }]
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            } 
                        }
                    }, {
                        name: '02',
                        value: 54
                    }]
                }]
            }) 
        },
        drawLine3(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('rowechars3'));   
        myChart.setOption({
                    title: {
                    text: '84%',
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        color: '#1EBFAE',
                        fontSize: '26'
                    }
                },
                color: ['rgba(234, 234, 234, 234)'], 
                series: [{
                    name: 'Line 1',
                    type: 'pie',
                    clockWise: true,
                    radius: ['90%', '80%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    hoverAnimation: false, 
                    data: [{
                        value: 84,
                        name: '01',
                        itemStyle: {
                            normal: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#1EBFAE' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#1EBFAE' // 100% 处的颜色
                                    }]
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            } 
                        }
                    }, {
                        name: '02',
                        value: 16
                    }]
                }]
            }) 
        },
        drawLine4(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('rowechars4'));   
        myChart.setOption({
                    title: {
                    text: '55%',
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        color: '#FFB53E',
                        fontSize: '26'
                    }
                },
                color: ['rgba(234, 234, 234, 234)'], 
                series: [{
                    name: 'Line 1',
                    type: 'pie',
                    clockWise: true,
                    radius: ['90%', '80%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    hoverAnimation: false, 
                    data: [{
                        value: 55,
                        name: '01',
                        itemStyle: {
                            normal: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#FFB53E' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#FFB53E' // 100% 处的颜色
                                    }]
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            } 
                        }
                    }, {
                        name: '02',
                        value: 55
                    }]
                }]
            }) 
        },
    }
} 
</script>

<style scoped>
.container-fluid{
    padding: 10px 30px;
}
.ecbox{
    text-align: center;
    font-size: 18px;
    background: #fff;
    padding: 20px;
    margin: .5rem 0 1rem 0;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
}
.ecbox h4{
    padding: 10px;
}
#rowechars1,#rowechars2,#rowechars3,#rowechars4{
    width: 120px;
    height: 120px;
    margin: auto;
}
.row1{
    margin-bottom: 20px;
}
</style>
