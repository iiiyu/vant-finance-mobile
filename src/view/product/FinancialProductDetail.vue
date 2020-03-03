<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="理财产品一" fixed :z-index="10"></van-nav-bar>
    <div class="nav-con-16">
      <!--头部信息-->
      <div class="main-con">
        <div class="van-hairline--bottom prod-name">
          <span class="name-ico">C</span>理财产品一
        </div>
        <div class="align-center rate-con">
          <div class="red-txt">
            <span class="big-rate">3.25</span>%
          </div>
          <div class="rate-tit">预期年化收益</div>
        </div>
      </div>
      <!--中部信息-->
      <div class="detail-con" style="margin-top: 10px; padding: 20px 10px;">
        <van-row>
          <van-col span="12" style="text-align: center;">
            <div style="font-size: 22px; color: #44bb00; margin-bottom: 10px;">92</div>
            <div>理财期限 (天)</div>
          </van-col>
          <van-col span="12" style="text-align: center;">
            <div style="font-size: 22px; color: #44bb00; margin-bottom: 10px;">50000.00</div>
            <div>起点金额 (元)</div>
          </van-col>
        </van-row>
      </div>
      <!--底部选项-->
      <div style="margin-top: 10px;">
        <van-cell-group>
          <van-cell title="风险等级" value="低风险" />
          <van-cell title="产品类型" value="保证收益类" />
          <van-cell title="产品状态" value="募集期" />
          <van-cell title="递增金额(元)" value="10,000.00" />
          <van-cell title="募集期" value="2020年03月03日 ~ 2020年03月10日" />
          <van-cell title="产品成立日" value="2020年03月10日" />
          <van-cell title="产品结束日" value="2020年06月10日" />
        </van-cell-group>
      </div>
      <div class="align-center bottom-txt">个人资产由银行托管保障安全</div>
      <!--底部按钮-->
      <van-button type="danger" class="bottom-btn" @click="goToContact">
        立即购买
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'financial-product-detail',
  data() {
    return {
      activeNames: ['1'],
      statusList: [
        { img1: require('@/assets/img/product/prod_status2.png'), img2: require('@/assets/img/product/prod_arrow1.png'), text: '启动计划' },
        { img1: require('@/assets/img/product/prod_status3.png'), img2: require('@/assets/img/product/prod_arrow1.png'), text: '启动计划' },
        { img1: require('@/assets/img/product/prod_status4.png'), img2: require('@/assets/img/product/prod_arrow1.png'), text: '启动计划' },
        { img1: require('@/assets/img/product/prod_status1.png'), img2: require('@/assets/img/product/prod_arrow1.png'), text: '启动计划' }
      ]
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
  padding: 10px;
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
  .btn-left {
    font-size: 14px;
  }
}

.period-txt {
  font-size: 14px;
  color: #ff6611;
  display: inline-block;
  padding: 1px 8px;
  border: 1px solid #ff6611;
  border-radius: 20px;
}

.rate-con {
  padding: 20px 0;
  .rate-tit {
    color: #999999;
    font-size: 14px;
    margin-top: 8px;
  }
  .big-rate {
    font-size: 34px;
  }
}

.pro-per {
  margin: 4px 0;
  font-size: 14px;
  color: #999999;
}

.pro-amount {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  font-size: 14px;
  color: #999999;
}

.prod-progress {
  height: 6px;
}

.main-con {
  background-color: white;
  padding: 10px;
  .prod-name {
    padding: 4px 0;
    font-size: 14px;
    color: #666666;
    .name-ico {
      background-color: #ff6c6c;
      height: 20px;
      padding: 0 4px;
      margin-right: 4px;
      border-radius: 2px;
      color: white;
      line-height: 20px;
    }
  }
}

.van-nav-bar .van-icon {
  color: #aaa;
}
</style>
