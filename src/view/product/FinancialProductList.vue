<template>
  <div>
    <div
      class="prod-item click-box"
      v-for="(it_po,idx_p) in fundProducts"
      :key="'fund-box-' + idx_p"
      @click="onProductClick(idx_p)"
    >
      <van-row>
        <van-col span="12" class="prod-rate">
          <div class="red-txt rate-txt">
            <span class="rate-big">{{it_po.rate}}</span>
            %+{{it_po.add}}%
          </div>
          <div class="light-txt rate-ins">预期年化收益率</div>
        </van-col>
        <van-col span="12" class="prod-ins">
          <div class="prod-title">{{it_po.name}}</div>
          <div class="prod-tag">期限{{it_po.days}}天</div>
        </van-col>
      </van-row>
      <!--进度条-->
      <van-progress
        :percentage="it_po.percent"
        color="#ff6611"
        class="prod-progress"
        :show-pivot="false"
      ></van-progress>
      <div class="pro-amount">
        <div>项目总额{{it_po.total}}万</div>
        <div>
          剩余可投
          <span class="red-txt">{{it_po.total - (it_po.total * (it_po.percent / 100))}}万</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'financial-product-list',
  data() {
    return {
      fundProducts: [
        {
          id: 1,
          rate: 3.25,
          add: 0.5,
          name: '明珠一期理财基金',
          days: 1095,
          percent: 20,
          total: 10000
        },
        {
          id: 2,
          rate: 3.25,
          add: 0.5,
          name: '明珠二期理财基金',
          days: 1460,
          percent: 45,
          total: 3000
        },
        {
          id: 2,
          rate: 3.25,
          add: 0.5,
          name: '父母退休类移民',
          days: 1460,
          percent: 45,
          total: 3000
        }
      ]
    }
  },
  methods: {
    onProductClick(id) {
      this._routePushQ('ProductDetail', { id: id })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
