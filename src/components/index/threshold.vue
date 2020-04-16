<template>
    <div class='threshold'>
           <el-table
                :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%;height: 100%">
                <el-table-column
                label="编号"
                prop="date">
                </el-table-column>
                <el-table-column
                label="阈值"
                prop="name">
                </el-table-column>
                <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
                </el-table-column>
            </el-table>
    </div>
</template>

<script>
export default {
    name:'threshold',
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '5'
        }, {
          date: '2016-05-04',
          name: '5'
        }, {
          date: '2016-05-01',
          name: '5'
        }, {
          date: '2016-05-01',
          name: '5'
        }, {
          date: '2016-05-01',
          name: '5'
        }, {
          date: '2016-05-01',
          name: '5'
        }, {
          date: '2016-05-01',
          name: '5'
        }, {
          date: '2016-05-01',
          name: '5'
        }, {
          date: '2016-05-01',
          name: '5'
        }],
        search: ''
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
    .threshold{
        width: 100%;
        height: 100%;
    }
</style>