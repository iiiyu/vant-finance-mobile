<template>
  <div>
    <!--缓存的页面-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="main-router-view" v-keep-scroll-position></router-view>
    </keep-alive>
    <!--不缓存的页面-->
    <router-view v-if="!$route.meta.keepAlive" class="main-router-view"></router-view>
    <!--下方的TabBar-->

    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item, i) in tabItemList"
        :key="i"
        :to="item.to"
        :icon="item.icon"
        replace
      >{{$t(item.name)}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "main-page",
  watch: {
    $route() {
      this.checkTabSelection();
    }
  },
  computed: {},
  data() {
    return {
      active: 0,
      tabBarSelect: 0,
      // Tab栏数据
      tabItemList: [
        {
          icon: "home-o",
          name: "tab_home",
          to: "home"
        },
        {
          icon: "chart-trending-o",
          name: "tab_products",
          to: "products"
        },
        // {
        //   icon: "good-job-o",
        //   name: "tab_discovery",
        //   to: "discover"
        // },
        {
          icon: "user-o",
          name: "tab_mine",
          to: "mine"
        }
      ]
    };
  },
  methods: {
    // 看一下tab栏应给高亮哪一个
    checkTabSelection() {
      for (let i = 0; i < this.tabItemList.length; i++) {
        let p = this.tabItemList[i];
        if (this.$route.path.endsWith(p.to)) {
          this.active = i;
        }
      }
    }
  },
  mounted() {
    this.checkTabSelection();
  }
};
</script>

<style scoped>
.tab-txt {
  text-align: center;
  margin-top: -2px;
}

.main-router-view {
  height: calc(100vh - 50px);
  overflow-y: auto;
  box-sizing: border-box;
  background-color: #f8f8f8;
}

.icon-img {
  margin-bottom: -1px;
  height: 25px;
}
</style>
