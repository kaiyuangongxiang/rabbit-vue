<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
    <!-- 测试组件的复用 -->
  <!-- <homeProduct />
   <home-panel title="新鲜好物" sub-title="新鲜好物,好多商品">
    <div>
      新鲜好物插槽
    </div>
   </home-panel>

    <home-panel title="人气推荐" sub-title="人气推荐,好多商品">
    <div>
      人气推荐插槽
    </div>
   </home-panel> -->
</template>

