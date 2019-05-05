<template>
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="linebox">
            <div id="line2">
            </div>
            <h4>AREA CHART</h4>
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
        var myChart = echarts.init(document.getElementById('line2'));  
        myChart.setOption({
            tooltip : {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {   "axisTick": {
                            "show": false
                        },
                        "axisLabel": {
                            interval:0
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
        }
    }
}
</script>

<style scoped>
.linebox{
    margin: .5rem 0 1rem 0;
    background: #fff;
}
#line2{
    height: 350px;
}
.linebox h4{
    padding: 20px;
    border-top: 1px solid rgba(160,160,160,0.2);
}
</style>
