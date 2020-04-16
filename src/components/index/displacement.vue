<template>
    <div id='displacement'>
        <div class='list'>
            <form action="" method='get'>
                <input type='checkbox' name='yi' value='yi'>节点一
                <input type='checkbox' name='eri' value='er'>节点二
                <input type='checkbox' name='san' value='san'>节点三
                <input type='checkbox' name='si' value='si'>节点四
                <input type='checkbox' name='wu' value='wu'>节点五
            </form>
        </div>
        <div class='chart'>
            <div id="main" style="width: 100%;height:540px;"></div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'displacement',
    data(){
        return{
            myChart: '',
            oneDay: 24 * 3600 * 1000,
            data: [],
            value: '',
            now: '',
            option: {
                title: {
                    text: '动态数据 + 时间坐标轴'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        params = params[0];
                        var date = new Date(params.name);
                        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                    },
                    axisPointer: {
                        animation: false
                    }
                },
                xAxis: {
                    type: 'time',
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: false
                    }
                },
                series: [{
                    name: '模拟数据',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: this.data
                }]
            },
        }
    },
    methods: {
        randomData() {
            this.now = new Date(+this.now + this.oneDay);
            this.value = this.value + Math.random() * 21 - 10;
            return {
                name: this.now.toString(),
                value: [
                    [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
                    Math.round(this.value)
                ]
            }
        }
    },
    mounted() {
        this.myChart = this.$echarts.init(document.getElementById('main'));
        this.now = +new Date(1997, 9, 3);
        this.value = Math.random() * 1000;
        for(var i = 0; i < 1000; i ++){
            this.data.push(this.randomData());
        };

        var _that = this;
         _that.myChart.setOption(_that.option);
        setInterval(function() {
            for (var i = 0; i < 5; i++) {
                _that.data.shift();
                _that.data.push(_that.randomData());
            }
            _that.myChart.setOption({
                series: [{
                    data: _that.data
                }]
            });
        },1000)
    }
}
</script>

<style scoped lang="scss">
    #displacement{
        width: 100%;
        height: 640px;
        .list{
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            form{
                .input{
                    margin: 0 100px;
                }
            }
        }
        .chart{
           width: 100%;
            height: 540px;
            background: pink;
        }
    }
</style>
