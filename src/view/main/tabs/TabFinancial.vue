<template>
  <div>
    <div>
      <van-nav-bar :title="$t('manage_finances')" fixed :z-index="10" @click-right="onClickRight" style="background-color: red;">
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
    </div>
    <div style="position: relative; margin-top: 50px;">
      <van-swipe :autoplay="5000" indicator-color="red">
        <van-swipe-item v-for="(item, index) in swipeImages" :key="index">
          <van-image class="swipe-img" :src="item.img" @click="swipeImageClick(item)" fit="cover" style="height: 160px;"></van-image>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="navbar-con">
      <!-- <van-tabs v-model="activeSort" class="sort-all" @change="onTabChange" line-width="33%" type="card">
        <van-tab :title="it_so.title" v-for="(it_so, idx) in sortItems" :key="idx"> -->
          <div class="prod-item click-box" v-for="(it_po,idx_p) in allProducts"
               :key="idx_p" @click="onProductClick(it_po)">
            <van-row>
              <van-col span="12" class="prod-rate">
                <div class="red-txt rate-txt"><span class="rate-big">{{it_po.rate}}</span>%+{{it_po.add}}%</div>
                <div class="light-txt rate-ins">预期年化收益率</div>
              </van-col>
              <van-col span="12" class="prod-ins">
                <div class="prod-title">{{it_po.name}}</div>
                <div class="prod-tag">{{it_po.type}}</div>
              </van-col>
            </van-row>
            <!--进度条-->
            <van-progress :percentage="it_po.percent" color="#ff6611" class="prod-progress" :show-pivot="false">
            </van-progress>
            <div class="pro-amount">
              <div>起购金额 (元)</div>
              <div><span class="red-txt">50000.00</span></div>
            </div>
          </div>
        <!-- </van-tab>
      </van-tabs> -->
    </div>
    <van-action-sheet
      v-model="languageShow"
      :actions="actions"
      :cancel-text="$t('cancel')"
      @select="onSelect"
    />
  </div>
</template>

<script>
  import {Locale} from 'vant'
  import enUS from 'vant/lib/locale/lang/en-US'
  import zhCN from 'vant/lib/locale/lang/zh-CN'

  export default {
    name: "tab-products",
    data() {
      return {
        languageShow: false,
        actions: [
          { name: 'Language', disabled: true},
          { name: '中文' },
          { name: 'English' }
        ],
        swipeImages: [
          { img: require("@/assets/img/banner/banner1.png"), link: "" },
          { img: require("@/assets/img/banner/banner2.png"), link: "" }
        ],
        activeSort: 0,
        sortItems: [
          {title: '推荐'},
          {title: '收益率'},
          {title: '期限'},
        ],
        allProducts: [
          {id: 5, rate: 4.5, add: 0.5, name: 'A计划064512544', type: '低风险', percent: 65},
          {id: 6, rate: 4.0, add: 0.5, name: 'B计划064512542', type: '较低风险', percent: 95},
          {id: 7, rate: 2.5, add: 0.1, name: 'C计划064512546', type: '低风险', percent: 23},
          {id: 8, rate: 4.5, add: 0.5, name: 'A计划064512544', type: '低风险', percent: 65},
          {id: 9, rate: 4.0, add: 0.5, name: 'B计划064512542', type: '较低风险', percent: 95},
          {id: 22, rate: 2.5, add: 0.1, name: 'C计划064512546', type: '低风险', percent: 23},
          {id: 34, rate: 4.5, add: 0.5, name: 'A计划064512544', type: '低风险', percent: 65},
          {id: 21, rate: 4.0, add: 0.5, name: 'B计划064512542', type: '较低风险', percent: 95},
          {id: 12, rate: 2.5, add: 0.1, name: 'C计划064512546', type: '低风险', percent: 23}
        ],
      };
    },
    computed: {
      getProductList() {
        let newList = this.allProducts.slice(0);
        return (index) => {
          if (index == 0) {
            return this.allProducts;
          } else if (index == 1) {
            return newList.sort((a, b) => {
              return a.rate - b.rate;
            });
          } else if (index == 2) {
            return newList.sort((a, b) => {
              return a.type - b.type;
            });
          }
        }
      }
    },
    methods: {
      onProductClick(item) {
        this._routePushQ('FinancialProductDetail', {id: item.id});
      },
      onTabChange() {
      },
      onClickRight() {
        this.languageShow = true
      },
      onSelect(item) {
        if (item.name == '中文' || item.name == 'Chinese') {
          localStorage.languageKey = 'zh'
          Locale.use('zh-CN', zhCN)
        } else if (item.name == '英语' || item.name == 'English') {
          localStorage.languageKey = 'en'
          Locale.use('en-US', enUS)
        }

        this.$i18n.locale = localStorage.languageKey

        this.languageShow = false
      }
    },
  }
</script>

<style scoped lang="scss">
  .prod-item {
    padding: 12px;
    margin-top: 12px;
    .pro-amount {
      display: flex;
      justify-content: space-between;
      margin-top: 4px;
      font-size: 14px;
      color: #999999;
    }
    .prod-progress {
      margin-top: 20px;
      height: 6px;
    }
    .prod-rate {
      text-align: center;
      padding: 2px 10px;
      .rate-txt {
        font-size: 14px;
        .rate-big {
          font-size: 24px;
        }
      }
      .rate-ins {
        font-size: 12px;
        margin-top: 4px;
      }
    }
    .prod-ins {
      border-left: 1px solid #aaaaaa;
      padding: 2px 10px;
      .prod-title {
        font-size: 14px;
      }
      .prod-tag {
        display: table;
        font-size: 12px;
        margin-top: 16px;
        border: 1px solid #ff6c6c;
        border-radius: 20px;
        color: #ff6c6c;
        padding: 0 6px;
      }
    }
  }

  .navbar-con {
    .sort-all {
      padding-top: 10px;
    }
  }

  .van-nav-bar__title {
    color: #fff;
  }

  .van-nav-bar .van-icon {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
</style>
