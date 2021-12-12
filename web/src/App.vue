<template>
    <router-view></router-view>
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
html,body{
  margin: 0%;
  padding: 0%;
  height: 100%;
}
</style>