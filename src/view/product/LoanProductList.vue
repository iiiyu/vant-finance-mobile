<template>
  <van-cell-group>
    <van-cell
      v-for="(it_po,idx_p) in loanProducts"
      :key="'loan-cell-' + idx_p"
      :title="it_po.name"
      :value="it_po.rate + '%'"
      :label="it_po.detail"
    />
  </van-cell-group>
</template>


<script>
export default {
  name: 'loan-product-list',
  data() {
    return {
      loanProducts: [
        {
          id: 1,
          rate: 4.5,
          add: 0.5,
          name: '商业贷款',
          detail:
            '想购买新物业，亦或是想装修、扩建，或者是短期拆借，我们可以帮到您',
          days: 365,
          percent: 65,
          total: 300
        },
        {
          id: 2,
          rate: 6.5,
          add: 0.5,
          name: '开发贷款',
          detail: '如果您是开发商，我们能为您量身定制方案满足您的融资需求。',
          days: 365,
          percent: 65,
          total: 300
        },
        {
          id: 3,
          rate: 11.5,
          add: 0.5,
          name: '过桥贷款',
          detail:
            '您是否在购买物业或者开发房产的过程中有过临时资金周转的问题？我们能为您提供短期拆借方案，满足您资金周转的需求。',
          days: 365,
          percent: 65,
          total: 300
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
