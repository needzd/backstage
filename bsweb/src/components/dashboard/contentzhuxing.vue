<template>
    <div class="col-xs-12 col-sm-12 col-md-7">
        <div class="linebox">
            <div id="line1">
                
            </div>
            <h4>BAR CHART EXAMPLE</h4>
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
        this.drawLine();
    },
    methods: {
        drawLine(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('line1'));  
        myChart.setOption({
               tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
                    }
                }],
                yAxis: [{
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
        }
    }
}
</script>

<style scoped>
.linebox{
    background: #fff;
    margin: auto;
}
#line1{
    height: 350px;
}
.linebox h4{
    padding: 20px;
    border-top: 1px solid rgba(160,160,160,0.2);
}
</style>
