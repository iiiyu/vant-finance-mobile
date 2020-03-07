<template>
  <div>
    <!--缓存的页面-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="main-router-view" v-keep-scroll-position></router-view>
    </keep-alive>
    <!--不缓存的页面-->
    <router-view v-if="!$route.meta.keepAlive" class="main-router-view"></router-view>
    <!--下方的TabBar-->

    <van-tabbar v-model="active" :safe-area-inset-bottom="true">
      <van-tabbar-item
        v-for="(item, i) in tabItemList"
        :key="i"
        :to="item.to"
        replace
      >
      <span>{{$t(item.name)}}</span>
      <i slot="icon" :class="item.icon" style="font-size: 20px;"></i>
    </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'main-page',
  watch: {
    $route() {
      this.checkTabSelection()
    }
  },
  computed: {},
  data() {
    return {
      active: 0,
      tabBarSelect: 0,
      // Tab栏数据
      tabItemList: [
        // {
        //   icon: 'home-o',
        //   name: 'tab_home',
        //   to: 'home'
        // },
        {
          icon: 'iconfont iconjineqiandaiyueshangjin',
          name: 'borrow_money',
          to: 'home'
        },
        {
          icon: 'iconfont icon_jinrongtouzi',
          name: 'manage_finances',
          to: 'finance'
        },
        {
          icon: 'iconfont iconjijinguanliren',
          name: 'fund',
          to: 'fund'
        },
        {
          icon: 'iconfont iconziyuan',
          name: 'insurance',
          to: 'insurance'
        }
        // {
        //   icon: "good-job-o",
        //   name: "tab_discovery",
        //   to: "discover"
        // },
        // {
        //   icon: "user-o",
        //   name: "tab_mine",
        //   to: "mine"
        // }
      ]
    }
  },
  methods: {
    // 看一下tab栏应给高亮哪一个
    checkTabSelection() {
      for (let i = 0; i < this.tabItemList.length; i++) {
        let p = this.tabItemList[i]
        if (this.$route.path.endsWith(p.to)) {
          this.active = i
        }
      }
    }
  },
  mounted() {
    this.checkTabSelection()
  }
}
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

.van-tabbar-item--active {
  font-weight: bold;
  color: #f44;
}
</style>
