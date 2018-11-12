<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
        <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>


<style>

</style>
