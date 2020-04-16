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
            label="库名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="结构">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
      name: 'database',
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '用户',
          address: '14'
        }, {
          date: '2016-05-04',
          name: '历史数据',
          address: '12'
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