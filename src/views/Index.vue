<template>
    <div class="index">
        <div class="header">
            <div class="title">
                <el-row>
                    <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
                </el-row>
            </div>
            <div class="header-nav">
                <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <el-menu-item index="1">系统概况</el-menu-item>
                    <el-menu-item index="2">结构监测</el-menu-item>
                    <el-menu-item index="3">数据分析</el-menu-item>
                    <el-menu-item index="4">监测报警</el-menu-item>
                    <el-menu-item index="5">系统管理</el-menu-item>
                    <el-menu-item index="6">技术支持</el-menu-item>
                    <el-button class='quit' type="info">退出</el-button>
                </el-menu>
            </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        if(key == 2){
            if(this.$route.path != '/structure'){
                this.$router.push({path: '/structure'});
            }
        }else if(key == 3){
            this.$router.push({path: '/data'});
        }else if(key == 4){
            this.$router.push({path: '/warm'});
        }else if(key == 5){
            this.$router.push({path: '/system'});
        }else if(key == 1){
            this.$router.push({path: '/overview'});
        }else if(key == 6){
            this.$router.push({path: '/support'});
        }
      },

        // 数据测试获取接口数据
        getTestData() {
            this.$http.get("/api/get_record/").then((res) => {
                console.log(res);
            }).catch((err) =>{
                console.log(err);
            })
        }
    },
    mounted() {
        this.getTestData();
    }
}
</script>

<style scoped lang="scss">
@import '../assets/css/index/index.scss';
.index{
    .header{
        .header-nav{
            position: relative;
            .quit{
                position: absolute;
                right:20px;
                top: 10px;
            }
        }
    }
}
</style>
