<template>
  <div>
    <div>
      <van-nav-bar :title="$t('fund')" fixed :z-index="10" @click-right="onClickRight" style="background-color: #f44;">
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
    </div>
    <div style="position: relative; margin: 50px 5px 5px;">
      <van-image
        fit="contain"
        :src="banner"
      />
    </div>
    <van-notice-bar text="温馨提示：在进行基金投资时，投资者应当谨慎判断和识别风险。" left-icon="volume-o" />
    <div class="navbar-con" style="margin-top: -5px;">
      <div class="click-box" v-for="(it_po,idx_p) in allProducts" style="margin-top: 12px;" 
           :key="idx_p" @click="onProductClick(it_po)">
        <van-panel>
          <van-cell :title="it_po.name" icon="points" is-link />
          <div style="padding: 20px 0; text-align: center;">
            <van-row>
              <van-col span="8">
                <div class="fund-value">{{it_po.rate}}</div>
                <div class="fund-title">预期年化收益率</div>
              </van-col>
              <van-col span="8">
                <div class="fund-value">50000.00</div>
                <div class="fund-title">起购金额 (元)</div>
              </van-col>
              <van-col span="8">
                <div class="fund-value" style="font-size: 16px;">高风险</div>
                <div class="fund-title">风险等级</div>
              </van-col>
            </van-row>
          </div>
        </van-panel>
      </div>
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
  name: 'fund',
  data() {
    return {
      banner: require("@/assets/img/banner/fund.png"),
      languageShow: false,
      actions: [
        { name: 'Language', disabled: true},
        { name: '中文' },
        { name: 'English' }
      ],
      active: 0,
      sections: ['专项化基金', '理财', '贷款'],
      loanProducts: [
        {
          id: 1,
          rate: 4.5,
          add: 0.5,
          name: '商业贷款',
          detail:
            '想购买新物业，亦或是想装修、扩建，或者是短期拆借，我们可以帮到您',
          days: 365,
          percent: 65
        }
      ],
      allProducts: [
        {
          id: 5,
          rate: 4.5,
          add: 0.5,
          name: 'A计划064512544',
          days: 365,
          percent: 65
        },
        {
          id: 6,
          rate: 4.0,
          add: 0.5,
          name: 'B计划064512542',
          days: 60,
          percent: 95
        },
        {
          id: 7,
          rate: 2.5,
          add: 0.1,
          name: 'C计划064512546',
          days: 30,
          percent: 23
        },
        {
          id: 8,
          rate: 4.5,
          add: 0.5,
          name: 'A计划064512544',
          days: 365,
          percent: 65
        },
        {
          id: 9,
          rate: 4.0,
          add: 0.5,
          name: 'B计划064512542',
          days: 60,
          percent: 95
        },
        {
          id: 22,
          rate: 2.5,
          add: 0.1,
          name: 'C计划064512546',
          days: 30,
          percent: 23
        },
        {
          id: 34,
          rate: 4.5,
          add: 0.5,
          name: 'A计划064512544',
          days: 365,
          percent: 65
        },
        {
          id: 21,
          rate: 4.0,
          add: 0.5,
          name: 'B计划064512542',
          days: 60,
          percent: 95
        },
        {
          id: 12,
          rate: 2.5,
          add: 0.1,
          name: 'C计划064512546',
          days: 30,
          percent: 23
        },
        {
          id: 13,
          rate: 6.0,
          add: 0.1,
          name: 'C计划064512546(售罄)',
          days: 10,
          percent: 100
        },
        {
          id: 14,
          rate: 5.0,
          add: 0.1,
          name: 'C计划064512543(售罄)',
          days: 120,
          percent: 100
        },
        {
          id: 15,
          rate: 6.0,
          add: 0.1,
          name: 'C计划064512546(售罄)',
          days: 10,
          percent: 100
        },
        {
          id: 16,
          rate: 5.0,
          add: 0.1,
          name: 'C计划064512543(售罄)',
          days: 120,
          percent: 100
        },
        {
          id: 17,
          rate: 6.0,
          add: 0.1,
          name: 'C计划064512546(售罄)',
          days: 10,
          percent: 100
        },
        {
          id: 18,
          rate: 5.0,
          add: 0.1,
          name: 'C计划064512543(售罄)',
          days: 120,
          percent: 100
        }
      ]
    }
  },
  computed: {
    getProductList() {
      let newList = this.allProducts.slice(0)
      return index => {
        if (index == 0) {
          return this.allProducts
        } else if (index == 1) {
          return newList.sort((a, b) => {
            return a.rate - b.rate
          })
        } else if (index == 2) {
          return newList.sort((a, b) => {
            return a.days - b.days
          })
        }
      }
    }
  },
  methods: {
    onProductClick(item) {
      this._routePushQ('FundProductDetail', { id: item.id })
    },
    onTabChange() {},
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
  }
}
</script>


<style lang="less" scoped>
.my-tab {
  margin-top: 46px;
  padding-top: 5px;
}

.van-nav-bar__title {
  color: #fff;
}

.van-nav-bar .van-icon {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.fund-value {
  font-size: 18px;
  color: #44bb00;
}

.fund-title {
  margin-top: 5px;
  font-size: 12px;
  color: #666;
}

.van-panel__header {
  padding: 0;
}
</style>
