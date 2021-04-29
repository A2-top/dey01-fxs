<template>
   <nav>
      <ul>
        <li v-for="(item, index) in 8" :key="index">
          <van-icon name="shop" size="2.5rem" />
          <span>装修方案</span>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  background: #fff;
}
nav > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
nav > ul > li {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.625rem;
}
nav > ul > li > .van-icon {
  background: orange;
  padding: 1.25rem;
  border-radius: 50%;
}
</style>