<template>
<el-container>
  <el-header>
      <div class="sys-title">博客后台管理系统</div>
      <div class="header-righter">
          <span>网站首页</span>
          <span>头像</span>
          <span>admin</span>
          <span>退出</span>
      </div>
  </el-header>
  <el-container>
    <el-aside width="200px">
        <el-menu>
            <el-submenu>
                <template #title>
                    <span>个人中心</span>
                </template>
                <el-menu-item>个人资料</el-menu-item>
                <el-menu-item>修改密码</el-menu-item>
            </el-submenu>
            <el-submenu>
                <template #title>
                    <span>文章管理</span>
                </template>
                <el-menu-item>发布文章</el-menu-item>
                <el-menu-item>文章列表</el-menu-item>
            </el-submenu>
            <el-menu-item>
                <template #title>
                    <span>评论管理</span>
                </template>
            </el-menu-item>
                 <el-menu-item>
                <template #title>
                    <span>粉丝管理</span>
                </template>
            </el-menu-item>
                 <el-menu-item>
                <template #title>
                    <span>点赞管理</span>
                </template>
            </el-menu-item>
        </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {

}
</script>

<style>
.el-header{
    background-color: aqua;
}
.el-aside{
    background-color:burlywood;

}
.el-main{
    background-color: black;
}
.el-container{
    height: 100%;
}
</style>