<template>
  <div>
    <van-nav-bar :title="$t('fund')" fixed />
    <van-tabs class="my-tab" animated v-model="active">
      <van-tab v-for="index in sections" :title="index" :key="index">
        <fund-product-list v-if="active == 0 "></fund-product-list>
        <financial-product-list v-if="active == 1 "></financial-product-list>
        <loan-product-list v-if="active == 2 "></loan-product-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import LoanProductList from '@/view/product/LoanProductList'
import FundProductList from '@/view/product/FundProductList'
import FinancialProductList from '@/view/product/FinancialProductList'

export default {
  name: 'my-products',
  components: {
    LoanProductList,
    FundProductList,
    FinancialProductList
  },
  data() {
    return {
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
      this._routePushQ('ProductDetail', { id: item.id })
    },
    onTabChange() {}
  }
}
</script>


<style lang="less" scoped>
.my-tab {
  margin-top: 46px;
  padding-top: 5px;
}
</style>
