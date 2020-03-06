<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="门诊医疗险" fixed :z-index="10"></van-nav-bar>
    <div style="padding-top: 55px;">
      <!--头部信息-->
      <div>
        <van-image fit="contain" :src="banner" />
      </div>
      <!--中部信息-->
      <div style="margin-top: 10px;">
        <div class="detail-con">
          <div class="van-hairline--bottom" style="padding: 5px 0 10px;">
            <div>保障计划</div>
          </div>
          <van-row class="fund-detail" style="padding-top: 15px;">
            <van-col span="10">
              <div>门急诊医疗保险金</div>
            </van-col>
            <van-col span="14">
              <div class="detail-value">5000元</div>
            </van-col>
          </van-row>
          <van-row class="fund-detail">
            <van-col span="10">
              <div>单次报销免赔额</div>
            </van-col>
            <van-col span="14">
              <div class="detail-value">100元</div>
            </van-col>
          </van-row>
          <van-row class="fund-detail">
            <van-col span="10">
              <div>单次报销限额</div>
            </van-col>
            <van-col span="14">
              <div class="detail-value">300元</div>
            </van-col>
          </van-row>
          <van-row class="fund-detail">
            <van-col span="10">
              <div>投保年龄</div>
            </van-col>
            <van-col span="14">
              <div class="detail-value">3-49周岁</div>
            </van-col>
          </van-row>
          <van-row class="fund-detail">
            <van-col span="10">
              <div>保障期限</div>
            </van-col>
            <van-col span="14">
              <div class="detail-value">1年</div>
            </van-col>
          </van-row>
          <van-divider />
          <div style="padding-bottom: 5px; color: #f44; font-size: 18px;">$18.5/月</div>
        </div>
      </div>
      <!--底部选项-->
      <div style="margin-top: 10px;">
        <van-tabs v-model="active" style="margin-bottom: 48px; background-color: #fff;">
          <van-tab title="产品特色" style="padding: 20px 0;">
            <van-image fit="contain" :src="infoDetail" />
          </van-tab>
          <van-tab title="理赔说明" style="padding: 20px 10px;">
            <van-steps direction="vertical" :active="4">
              <van-step>
                <div style="font-weight: bold;">第一步：在线申请</div>
                <div style="padding-top: 8px;">通过微保平台在线填写理赔申请，上传理赔材料。</div>
              </van-step>
              <van-step>
                <div style="font-weight: bold;">第二步：完成理赔</div>
                <div  style="padding-top: 8px;">根据审核结果将理赔款项支付到被保人指定账户。</div>
              </van-step>
            </van-steps>
          </van-tab>
          <van-tab title="常见问题">
            <van-collapse v-model="activeNames">
              <van-collapse-item title="有了医保，还需要购买门诊医疗险吗？" name="1">
                医保覆盖面广但保障较低，一般门诊报销都有起付线和自付比例，个人承担的费用也不少。本产品对于符合当地医保报销范围的、必需且合理的门急诊医疗费用在扣除100元免赔额后按70%~80%的比例报销，可减少个人自付的医疗费，是对医保更好地商业保险补充。
              </van-collapse-item>
              <van-collapse-item title="社保卡个人账户支出部分能够报销吗？" name="2">
                被保人社保卡个人账户支出部分视为个人支付，不属于已获得的医疗费用补偿，可以报销。
              </van-collapse-item>
            </van-collapse>
          </van-tab>
        </van-tabs>
      </div>
      <!--底部按钮-->
      <van-button type="danger" class="bottom-btn" @click="goToContact">
        立即购买
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'insurance-product-detail',
  data() {
    return {
      banner: require("@/assets/img/insurance/insurance-detail.png"),
      active: 0,
      infoDetail: require("@/assets/img/insurance/details2.png"),
      activeNames: ['1']
    }
  },
  methods: {
    goToContact() {
      this.$router.push({
        name: 'Contact'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.bottom-txt {
  padding: 30px 0 64px 0;
  font-size: 14px;
  background-color: #f7f7f7;
  color: #999999;
}

.detail-con {
  background-color: white;
  padding: 10px 16px;
  .top-intro {
    margin-top: 16px;
    color: #999999;
  }
  .row-item {
    display: flex;
    align-items: center;
    padding: 16px 0;
    .status-img {
      width: 10vw;
      height: 10vw;
    }
    .arrow-img {
      width: 6vw;
      height: 6vw;
    }
    .status-txt {
      font-size: 12px;
      color: #999999;
    }
  }
  .top-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-bottom: 10px;
    color: #999999;
  }
}

.bottom-btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-radius: 0;
  font-size: 20px;
  height: 46px;
  background-color: #f44;
  .btn-left {
    font-size: 14px;
  }
}

.van-nav-bar .van-icon {
  color: #aaa;
}

.fund-detail {
  padding-top: 6px;
  color: #323233;
  font-size: 14px;
}

.top-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-bottom: 10px;
  color: #323233;
}

.detail-value {
  text-align: right;
}
</style>
