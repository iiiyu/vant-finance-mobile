<template>
  <div>
    <van-nav-bar :title="$t('insurance')" fixed :z-index="10" @click-right="onClickRight" style="background-color: #f44;">
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div style="margin-top: 50px;">
      <van-panel>
        <van-cell title="成人必备" icon="medal-o" style="font-size: 16px;" />
        <div style="padding: 15px 10px;">
          <van-row class="item-height" @click="onProductClick()">
            <van-col span="6">
              <van-image width="90%" :src="adultImg1" />
            </van-col>
            <van-col span="17" class="item-detail">
              <div class="insurance-title">门诊医疗险</div>
              <div class="insurance-info">5000元保额，最快1日内赔付</div>
              <div class="insurance-fee">
                <span>$18.5/月起</span>
                <span style="color: #aaa;"> | 报销感冒等小病医疗费</span>
              </div>
            </van-col>
            <van-col span="1" class="item-arrow">
              <van-icon name="arrow" />
            </van-col>
          </van-row>
          <van-divider />
          <van-row class="item-height" @click="onProductClick()">
            <van-col span="6">
              <van-image width="90%" :src="adultImg2" />
            </van-col>
            <van-col span="17" class="item-detail">
              <div class="insurance-title">重疾险</div>
              <div class="insurance-info">确诊即赔，最高50万</div>
              <div class="insurance-fee">
                <span>$3.2/月起</span>
                <span style="color: #aaa;"> | 覆盖高发的100种重疾</span>
              </div>
            </van-col>
            <van-col span="1" class="item-arrow">
              <van-icon name="arrow" />
            </van-col>
          </van-row>
        </div>
      </van-panel>
      <van-panel style="margin-top: 10px;">
        <van-cell title="孝顺父母" icon="medal-o" style="font-size: 16px;" />
        <div style="padding: 15px 10px;">
          <van-row class="item-height" @click="onProductClick()">
            <van-col span="6">
              <van-image width="90%" :src="parents1" />
            </van-col>
            <van-col span="17" class="item-detail">
              <div class="insurance-title">孝顺金定期寿险</div>
              <div class="insurance-info">5000元保额，最快1日内赔付</div>
              <div class="insurance-fee">
                <span>$18.5/月起</span>
                <span style="color: #aaa;"> | 报销感冒等小病医疗费</span>
              </div>
            </van-col>
            <van-col span="1" class="item-arrow">
              <van-icon name="arrow" />
            </van-col>
          </van-row>
          <van-divider />
          <van-row class="item-height" @click="onProductClick()">
            <van-col span="6">
              <van-image width="90%" :src="parents2" />
            </van-col>
            <van-col span="17" class="item-detail">
              <div class="insurance-title">中老年意外险</div>
              <div class="insurance-info">确诊即赔，最高50万</div>
              <div class="insurance-fee">
                <span>$3.2/月起</span>
                <span style="color: #aaa;"> | 覆盖高发的100种重疾</span>
              </div>
            </van-col>
            <van-col span="1" class="item-arrow">
              <van-icon name="arrow" />
            </van-col>
          </van-row>
        </div>
      </van-panel>
      <van-panel style="margin-top: 10px;">
        <van-cell title="关爱子女" icon="medal-o" style="font-size: 16px;" />
        <div style="padding: 15px 10px;">
          <van-row class="item-height" @click="onProductClick()">
            <van-col span="6">
              <van-image width="90%" :src="children" />
            </van-col>
            <van-col span="17" class="item-detail">
              <div class="insurance-title">少儿长期重疾险</div>
              <div class="insurance-info">5000元保额，最快1日内赔付</div>
              <div class="insurance-fee">
                <span>$18.5/月起</span>
                <span style="color: #aaa;"> | 报销感冒等小病医疗费</span>
              </div>
            </van-col>
            <van-col span="1" class="item-arrow">
              <van-icon name="arrow" />
            </van-col>
          </van-row>
        </div>
      </van-panel>
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
    name: "tab-insurance",
    data() {
      return {
        languageShow: false,
        actions: [
          { name: 'Language', disabled: true},
          { name: '中文' },
          { name: 'English' }
        ],
        adultImg1: require("@/assets/img/insurance/adult1.png"),
        adultImg2: require("@/assets/img/insurance/adult2.png"),
        parents1: require("@/assets/img/insurance/parents1.png"),
        parents2: require("@/assets/img/insurance/parents2.png"),
        children: require("@/assets/img/insurance/children.png")
      };
    },
    methods: {
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
      },
      onProductClick(item) {
        this._routePushQ('InsuranceProductDetail')
      }
    }
  }
</script>

<style scoped lang="scss">

  .van-nav-bar__title {
    color: #fff;
  }

  .van-nav-bar .van-icon {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  .van-panel__header {
    padding: 0;
  }

  .van-icon-medal-o {
    font-size: 20px;
    color: #f5a623;
  }

  .van-icon-arrow {
    line-height: 88px;
    font-size: 14px;
    color: #aaa;
  }

  .insurance-title {
    font-size: 1.1rem;
    font-weight: bold;
  }

  .insurance-info {
    font-size: 0.9rem;
    margin-top: 5px;
    color: #4a4a4a;
  }

  .insurance-fee {
    font-size: 0.8rem;
    margin-top: 5px;
    color: #f44;
  }

  .item-height {
    height: 88px;
  }

  .item-detail {
    padding-left: 5px;
  }

  .item-arrow {
    text-align: right;
  }
</style>
