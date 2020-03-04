<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="一类投资移民" fixed :z-index="10"></van-nav-bar>
    <div style="padding-top: 55px;">
      <!--头部信息-->
      <div class="main-con" >
        <div class="align-center rate-con">
          <div class="red-txt">
            <span class="big-rate">3.25</span>
            <span style="color: #fff;">%</span>
          </div>
          <div class="rate-tit">预期年化收益</div>
          <div class="period-txt top-mar-16">期限36个月</div>
        </div>
      </div>
      <van-row style="background-color: #ff7575; padding: 10px; text-align: center;">
        <van-col span="8">
          <div class="fund-title">单位净值</div>
          <div class="fund-value">1.3650</div>
        </van-col>
        <van-col span="8">
          <div class="fund-title">起购金额 (元)</div>
          <div class="fund-value">50000.00</div>
        </van-col>
        <van-col span="8">
          <div class="fund-title">风险等级</div>
          <div class="fund-value" style="font-size: 16px;">高风险</div>
        </van-col>
      </van-row>
      <!--中部信息-->
      <div class="detail-con" style="margin-top: 10px;">
        <div class="top-title van-hairline--bottom">
          <div>产品信息</div>
        </div>
        <van-row class="fund-detail" style="padding-top: 15px;">
          <van-col span="7">
            <div>产品全称</div>
          </van-col>
          <van-col span="17">
            <div>一类投资移民</div>
          </van-col>
        </van-row>
        <van-row class="fund-detail">
          <van-col span="7">
            <div>产品类型</div>
          </van-col>
          <van-col span="17">
            <div>股票型</div>
          </van-col>
        </van-row>
        <van-row class="fund-detail">
          <van-col span="7">
            <div>管理人</div>
          </van-col>
          <van-col span="17">
            <div>IE Finance</div>
          </van-col>
        </van-row>
        <van-row class="fund-detail">
          <van-col span="7">
            <div>产品开放期</div>
          </van-col>
          <van-col span="17">
            <div>2020/03/05 ~ 2020/03/31</div>
          </van-col>
        </van-row>
      </div>
      <!--底部选项-->
      <div style="margin-top: 10px;">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="购买信息" name="1">
            <div style="color: #323233; font-size: 14px; border-bottom: 1px solid #aaa;">
              <van-row>
                <van-col class="table-left" span="7">
                  <div>购买起点</div>
                </van-col>
                <van-col class="table-right" span="17">
                  <div>50000.00元</div>
                </van-col>
              </van-row>
              <van-row>
                <van-col class="table-left" span="7">
                  <div>存续期限</div>
                </van-col>
                <van-col class="table-right" span="17">
                  <div>永续</div>
                </van-col>
              </van-row>
              <van-row>
                <van-col class="table-left" span="7">
                  <div>购买手续费</div>
                </van-col>
                <van-col class="table-right" span="17">
                  <div>1.00%</div>
                </van-col>
              </van-row>
              <van-row>
                <van-col class="table-left" span="7">
                  <div>赎回费</div>
                </van-col>
                <van-col class="table-right" span="17">
                  <div>1。00%</div>
                </van-col>
              </van-row>
              <van-row>
                <van-col class="table-left" span="7">
                  <div>管理费</div>
                </van-col>
                <van-col class="table-right" span="17">
                  <div>1.00%</div>
                </van-col>
              </van-row>
              <van-row>
                <van-col class="table-left" span="7">
                  <div>托管费</div>
                </van-col>
                <van-col class="table-right" span="17">
                  <div>0.10%</div>
                </van-col>
              </van-row>
            </div>
          </van-collapse-item>
          <van-collapse-item title="阶段涨幅" name="2">
            <ve-line :data="chartData" :settings="chartSettings" height="300px"></ve-line>
            <div class="data-table">
              <van-row class="data-row" style="background-color: #f7f7f7;">
                <van-col span="8">
                  <div style="text-align: left">时间</div>
                </van-col>
                <van-col span="8">
                  <div>涨幅</div>
                </van-col>
                <van-col span="8">
                  <div>沪深300</div>
                </van-col>
              </van-row>
              <van-row class="data-row">
                <van-col span="8">
                  <div style="text-align: left">成立来</div>
                </van-col>
                <van-col span="8">
                  <div>36.50%</div>
                </van-col>
                <van-col span="8">
                  <div>—</div>
                </van-col>
              </van-row>
              <van-row class="data-row">
                <van-col span="8">
                  <div style="text-align: left">近1月</div>
                </van-col>
                <van-col span="8">
                  <div>-1.37%</div>
                </van-col>
                <van-col span="8">
                  <div>-1.59%</div>
                </van-col>
              </van-row>
              <van-row class="data-row">
                <van-col span="8">
                  <div style="text-align: left">近3月</div>
                </van-col>
                <van-col span="8">
                  <div>9.81%</div>
                </van-col>
                <van-col span="8">
                  <div>2.01%</div>
                </van-col>
              </van-row>
              <van-row class="data-row">
                <van-col span="8">
                  <div style="text-align: left">近6月</div>
                </van-col>
                <van-col span="8">
                  <div>17.07%</div>
                </van-col>
                <van-col span="8">
                  <div>3.62%</div>
                </van-col>
              </van-row>
              <van-row class="data-row">
                <van-col span="8">
                  <div style="text-align: left">近一年</div>
                </van-col>
                <van-col span="8">
                  <div>17.17%</div>
                </van-col>
                <van-col span="8">
                  <div>7.38%</div>
                </van-col>
              </van-row>
            </div>
          </van-collapse-item>
          <van-collapse-item title="产品公告" name="3">
            <a href=""><<风险揭示书>></a>
          </van-collapse-item>
        </van-collapse>
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
import VeLine from 'v-charts/lib/line'

export default {
  name: 'fund-product-detail',
  components: {
    VeLine
  },
  data() {
    return {
      activeNames: ['1'],
      statusList: [
        { img1: require('@/assets/img/product/prod_status2.png'), img2: require('@/assets/img/product/prod_arrow1.png'), text: '启动计划' },
        { img1: require('@/assets/img/product/prod_status3.png'), img2: require('@/assets/img/product/prod_arrow1.png'), text: '启动计划' },
        { img1: require('@/assets/img/product/prod_status4.png'), img2: require('@/assets/img/product/prod_arrow1.png'), text: '启动计划' },
        { img1: require('@/assets/img/product/prod_status1.png'), img2: require('@/assets/img/product/prod_arrow1.png'), text: '启动计划' }
      ],
      chartData: {
        columns: ['日期', '涨幅%'],
        rows: [
          { '日期': '3/01', '涨幅%': 0.32 },
          { '日期': '3/05', '涨幅%': 0.26 },
          { '日期': '3/10', '涨幅%': 0.76 },
          { '日期': '3/15', '涨幅%': 0.49 },
          { '日期': '3/20', '涨幅%': 1.323 },
          { '日期': '3/25', '涨幅%': 1.78 }
        ]
      },
      chartSettings: {
        // yAxisType: 'percent',
      }
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
    color: #323233;
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
  color: #eee;
  display: inline-block;
  padding: 1px 8px;
  border: 1px solid #eee;
  border-radius: 20px;
}

.rate-con {
  padding: 20px 0;
  .rate-tit {
    color: #ddd;
    font-size: 14px;
    margin-top: 8px;
  }
  .big-rate {
    color: #fff;
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
  // background-color: #f44;
  background-image: linear-gradient(#f44, #ff7f7f);
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

.fund-value {
  font-size: 18px;
  color: #fff;
}

.fund-title {
  margin-top: 5px;
  font-size: 14px;
  color: #ddd;
}

.fund-detail {
  padding-top: 6px;
  color: #323233;
  font-size: 14px;
}

.table-left {
  padding: 5px 8px;
  border-left: 1px solid #aaa;
  border-top: 1px solid #aaa;
  border-right: 1px solid #aaa;
  background-color: #f7f7f7;
}

.table-right {
  padding: 5px 8px;
  border-top: 1px solid #aaa;
  border-right: 1px solid #aaa;
}

.data-table {
  margin-top: -20px;
  text-align: center;
  color: #323233;
  font-size: 14px;
  border-top: 1px solid #ddd;
}

.data-row {
  padding: 5px 0px 5px 20px;
  border-bottom: 1px solid #ddd;
}
</style>
