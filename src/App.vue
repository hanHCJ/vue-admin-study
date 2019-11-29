<template>
  <div id="app">
    <div id="test" ref="test" class="red">123</div>
    <!--<router-view/>-->
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      eff: 'dark'
    }
  },
  mounted() {
    console.log(this.$tools.html2Text(`<ul><li>abc</li><li>def</li></ul>`))

    // this.$api.user.getName()
    this.$apis.account.demo({
      a: 1,
      b: 2
    }).then(function(res) {
      console.log('--------', res)
    })
  }
}
</script>

<style lang="scss">
  .red {
    background: Red;
  }
</style>
