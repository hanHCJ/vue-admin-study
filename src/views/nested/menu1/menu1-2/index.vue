<template>
  <div style="padding:30px;">
    <el-alert v-if="$route.path !== '/nested/menu1/menu1-2/menu1-2-2'" :closable="true" title="menu 1-2" type="success">
      <div @click="abc">123</div>
    </el-alert>
    <router-view v-else />
  </div>
</template>
<script>
export default {
  methods:{
    abc(){
      this.$router.push('/nested/menu1/menu1-2/menu1-2-2')
    },
  }
}
</script>
