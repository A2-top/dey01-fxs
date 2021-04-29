<template>
  <div class="index">
    <Header />
    <Nav />
    <Swipe />
  </div>
</template>

<script>
import Header from "../components/index/Header";
import Swipe from "../components/index/Swipe";
import Nav from "../components/index/Nav";
export default {
  components: {
    Header,
    Swipe,
    Nav,
  },
};
</script>

<style>
.index {
  height: 100%;
  width: 100%;
  background: #eee;
}
</style>
