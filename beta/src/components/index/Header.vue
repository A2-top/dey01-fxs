<template>
  <header>
      <img src="/imgs/logo.png" alt="" class="logo" />
      <p>
        <span>
          <van-icon name="contact" size="2rem" />
          <p>我的</p>
        </span>
        <span>
          <van-icon name="wap-nav" size="2rem" />
          <p>导航</p>
        </span>
      </p>
    </header>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
header {
  display: flex;
  justify-content: space-between;
  background: #fff;
}
header > p {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 6.25rem;
}
.logo {
  width: 10rem;
  margin: 0.375rem 0 0.625rem 0.625rem;
}
</style>