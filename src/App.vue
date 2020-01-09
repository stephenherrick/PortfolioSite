<template>
  <div id="app" class="bg=dark">
    <b-card-header header="Stephen Herrick" header-bg-variant="dark" header-text-variant="white" style="width:100%;">
    </b-card-header>
    <b-row align-h="center">
      <b-col></b-col>
      <b-col md="7" sm="auto">
        <router-view></router-view>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-card-footer :footer=getFooterText class="text-center footer" footer-bg-variant="light">
    </b-card-footer>
  </div>
</template>

<script>
  export default {
    name: "app",
    computed: {
      getFooterText: function () {
        var year = new Date().getFullYear().toString();
        var footerText = "©" + year + " stephenherrick.dev";
        return footerText
      }
    },
    methods: {
      track() {
        this.$ga.page('/')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .footer {
    position:fixed;
    bottom: 0;
    width: 100%;
  }
</style>