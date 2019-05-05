<template>
    <div class="col-xs-12 col-sm-12 col-md-5">
        <div class="linebox">
            <div id="line">
                
            </div>
            <h4>LINE CHART</h4>
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
        var myChart = echarts.init(document.getElementById('line'));
        var data1 = [55,95,101,61,78,176]
        var data2 = [35,175,161,45,120,198]
        var xdata = function(){
            var len = [];
                // for(var i=0;i<data1.length;i++){
                //     len[i] = i;
                // }
            return len;
        }   
        myChart.setOption({
                "title": {
                    "text": "2020",       
                    textStyle: {
                        color: '#666',
                        fontSize: '14',
                    },
                    left: 'center',
                    bottom: '15'
                },
                // "tooltip": {
                //     "trigger": "axis",
                //     "axisPointer": {
                //         "type": "line",
                //         textStyle: {
                //             color: "#fff"
                //         },
                //         lineStyle: {
                //             color: '#ccc'
                //         }
                //     },
                // },
                backgroundColor: '#fff',
                "xAxis": [{
                    "axisLine": {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    "axisTick": {
                        "show": false
                    },
                    "data": xdata(),
                }],
                "yAxis": [{
                    min:0,
                    max:200,
                    "splitLine": {
                        "show": true,
                        lineStyle: {
                            color: '#e6e6e6',
                        }
                    },
                    "axisLine": {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    "axisTick": {
                        "show": false
                    },
                }],
                "series": [{
                    "name": "总",
                    "type": "line",
                    "stack": "总量",
                    symbolSize: 10,
                    "itemStyle": {
                        "normal": {
                            "color": "rgb(128, 128, 128)",
                            "barBorderRadius": 0,
                        }
                    },
                    "data": data1
                },
                {
                    "name": "总",
                    "type": "line",
                    "stack": "总量",
                    symbolSize: 10,
                    "itemStyle": {
                        "normal": {
                            "color": "rgb(65, 78, 99)",
                            "barBorderRadius": 0,
                        }
                    },
                    "data": data2
                } ]
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
#line{
    height: 350px;
}
.linebox h4{
    padding: 20px;
    border-top: 1px solid rgba(160,160,160,0.2);
}
</style>
