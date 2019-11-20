<template>
<div @load="displayMardown()">
  <b-row align-content="left">
    <b-col id="content"></b-col>
  </b-row>
  <b-button @click="printMe()">
    <i class="fas fa-print fa-4x"></i>
  </b-button>
</div>
</template>

<script>
import doc from "../assets/resume.md"
import marked from "marked"

export default {
  methods:{
    printMe(){
      window.print()
    }
  },
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
    i {
      padding-bottom: 10%
    }
    i:hover {
      color: dodgerblue;
    }
</style>