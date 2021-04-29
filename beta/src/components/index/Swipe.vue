<template>
  <div class="div1">
      <p>
        <span>全屋装修<i>更安全,更保障</i></span>
      </p>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <van-grid direction="horizontal" :column-num="3">
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
</van-grid>
  </div>
</template>

<script>
 import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
export default {
    data() {
        return {
                  images: [
        '/imgs/img1.jpg',
        '/imgs/img1.jpg',
      ],
        }
    },
};
</script>

<style scoped>
img{
    width: 100%;
}
.div1 {
  background: #fff;
  padding: 0.625rem;
  margin-top: 0.625rem;

}
.div1 > p {
  padding: 0.625rem 0;
}
.div1 > p > span {
  border-left: #2bb281 solid 0.25rem;
  font-size: 1.25rem;
  padding: 0 0.3125rem;
}
.div1 > p > span > i {
  font-size: 1rem;
  margin: 0 0.5rem;
  color: #666;
}
img{
  width: 100%;
}
</style>
