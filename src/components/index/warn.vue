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
                        <span slot="title">阈值设置</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <span slot="title">报警管理</span>
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
            this.$router.push({path: '/warm/threshold'});
        }else{
            this.$router.push({path: '/warm/management'});
        }
      }
    }
}
</script>
<style lang="scss">
    
</style>