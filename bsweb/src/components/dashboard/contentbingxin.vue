<template>
    <div class="col-xs-12 col-sm-12 col-md-5">
        <div class="users">
            <div id="echusers">
            </div>
            <h4>Donut Chart Example</h4>
        </div>
    </div>  
</template>

<script>
import echarts from 'echarts'

export default {
    data () {
        return { }
    },
    mounted(){
        this.drawLine5();
    },
    methods: {
        drawLine5(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echusers'));   
        var ydata = [{name: 'Users',value: 48},{name: 'Total Sales',value: 19},{name: 'Profits',value: 33}];
        var color =["#414E63", "#E96562","#A6A6A6"]
        myChart.setOption({
                backgroundColor: "rgba(255,255,255,1)",
                color:color,
                series: [{
                    type: 'pie',
                    clockwise: false, //饼图的扇区是否是顺时针排布
                    startAngle: -30,
                    minAngle: 20, //最小的扇区角度（0 ~ 360）
                    radius: ["60%", "78%"],
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
.users{
    background: #fff;
    margin: .5rem 0 1rem 0;
}
#echusers{
    padding:32px;
    width: 100%;
    height: 350px;
    margin: auto;
}
.users h4{
    padding: 20px;
    border-top: 1px solid rgba(160,160,160,0.2);
}
</style>
