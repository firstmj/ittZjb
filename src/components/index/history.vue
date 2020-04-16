<template>
    <div id='displacement'>
        <div class='day'>
           <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                v-model="value2"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
                </el-date-picker>
            </div>
        </div>
        <div class='display'>
            <div id='data' style="width: 100%;height:540px;">
              <el-table
                :data="tableData"
                border
                height="540px"
                :summary-method="getSummaries"
                show-summary
                style="width: 100%; margin-top: 20px">
                <el-table-column
                  prop="id"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="最大值">
                </el-table-column>
                <el-table-column
                  prop="amount1"
                  label="最小值">
                </el-table-column>
                <el-table-column
                  prop="amount2"
                  label="平均值">
                </el-table-column>
                <el-table-column
                  prop="amount3"
                  label="总值">
                </el-table-column>
              </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'history',
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: '',
        tableData: [{
          id: '12987122',
          name: '500',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '500',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '500',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '500',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '500',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总值';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 厘米';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    }
  };
</script>

<style scoped lang="scss">
    #displacement{
        width: 100%;
        height: 640px;
        .day{
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .display{
           width: 100%;
            height: 540px;
            background: pink;
        }
    }
</style>