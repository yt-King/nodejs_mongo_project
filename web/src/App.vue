<template>
  <div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  created() {
    this.$http({
      path: "http://localhost:3000/users/find",
      method: "post",
      params: {},
    }).then(res=>{
      console.log(res)
    })
  },
};
</script>

<style>
</style>