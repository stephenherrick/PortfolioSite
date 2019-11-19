<template>
<div @load="displayMardown()">
  <b-row align-content="left">
    <b-col id="content"></b-col>
  </b-row>
</div>
</template>

<script>
import doc from "../assets/resume.md"
import marked from "marked"

export default {
    mounted() {
      document.getElementById('content').innerHTML =
      marked(doc);
    }
}
</script>

<style scoped>
    #content {
      text-align: left;
    }
</style>