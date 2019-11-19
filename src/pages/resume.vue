<template>
<div @load="displayMardown()">
  <div id="content"></div>
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

<style>

</style>