<template>
  <div id="app" class="wapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  color: #333;
}
.wapper{
  padding-bottom: 55px;
  background: #f1f2f4;
}
</style>
