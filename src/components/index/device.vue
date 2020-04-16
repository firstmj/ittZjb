<template>
    <div class='device'>
        <el-table
            :data="tableData"
            height="660px"
            border
            style="width: 100%">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="传感器"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="型号">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
      name: 'device',
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        },{
          date: '2016-05-02',
          name: '传感器',
          address: '11111111111'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style lang="scss" scope>

</style>