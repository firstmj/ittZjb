<template>
    <div class="system" style="display: flex;">
        <div style="height: 660px; width: 220px;">
            <el-menu style="height: 100%;"
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <span slot="title">历史数据</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <span slot="title">日均趋势</span>
                    </el-menu-item>
                    </el-menu>
        </div>
        <div class="right" style="flex: 1;">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'structure',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key);
        if(key == 1){
            this.$router.push({path: '/data/history'});
        }else{
            this.$router.push({path: '/data/every'});
        }
      }
    }
}
</script>
<style lang="scss">
    
</style>