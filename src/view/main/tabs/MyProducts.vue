<template>
  <div>
    <van-nav-bar :title="$t('my_products')" fixed />
    <van-tabs class="my-tab" animated v-model="active">
      <van-tab v-for="index in sections" :title="index" :key="index">
        <loan-product-list v-if="active == 0"></loan-product-list>
        <div class="prod-item click-box" v-for="index in 100">
          <van-row>
            <van-col span="12" class="prod-rate">
              <div class="red-txt rate-txt">
                <span class="rate-big">4.5</span>
                %+0.5%
              </div>
              <div class="light-txt rate-ins">预期年化收益率</div>
            </van-col>
            <van-col span="12" class="prod-ins">
              <div class="prod-title">xxxx</div>
              <div class="prod-tag">期限23天</div>
            </van-col>
          </van-row>
          <!--进度条-->
          <van-progress :percentage="30" color="#ff6611" class="prod-progress" :show-pivot="false"></van-progress>
          <div class="pro-amount">
            <div>项目总额180万</div>
            <div>
              剩余可投
              <span class="red-txt">75万</span>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import LoanProductList from "@/view/product/LoanProductList";
export default {
  name: "my-products",
  components: {
    LoanProductList
  },
  data() {
    return {
      active: 0,
      sections: ["贷款", "理财", "专项化基金"],
      loanProducts: [
        {
          id: 1,
          rate: 4.5,
          add: 0.5,
          name: "商业贷款",
          detail:
            "想购买新物业，亦或是想装修、扩建，或者是短期拆借，我们可以帮到您",
          days: 365,
          percent: 65
        }
      ],
      allProducts: [
        {
          id: 5,
          rate: 4.5,
          add: 0.5,
          name: "A计划064512544",
          days: 365,
          percent: 65
        },
        {
          id: 6,
          rate: 4.0,
          add: 0.5,
          name: "B计划064512542",
          days: 60,
          percent: 95
        },
        {
          id: 7,
          rate: 2.5,
          add: 0.1,
          name: "C计划064512546",
          days: 30,
          percent: 23
        },
        {
          id: 8,
          rate: 4.5,
          add: 0.5,
          name: "A计划064512544",
          days: 365,
          percent: 65
        },
        {
          id: 9,
          rate: 4.0,
          add: 0.5,
          name: "B计划064512542",
          days: 60,
          percent: 95
        },
        {
          id: 22,
          rate: 2.5,
          add: 0.1,
          name: "C计划064512546",
          days: 30,
          percent: 23
        },
        {
          id: 34,
          rate: 4.5,
          add: 0.5,
          name: "A计划064512544",
          days: 365,
          percent: 65
        },
        {
          id: 21,
          rate: 4.0,
          add: 0.5,
          name: "B计划064512542",
          days: 60,
          percent: 95
        },
        {
          id: 12,
          rate: 2.5,
          add: 0.1,
          name: "C计划064512546",
          days: 30,
          percent: 23
        },
        {
          id: 13,
          rate: 6.0,
          add: 0.1,
          name: "C计划064512546(售罄)",
          days: 10,
          percent: 100
        },
        {
          id: 14,
          rate: 5.0,
          add: 0.1,
          name: "C计划064512543(售罄)",
          days: 120,
          percent: 100
        },
        {
          id: 15,
          rate: 6.0,
          add: 0.1,
          name: "C计划064512546(售罄)",
          days: 10,
          percent: 100
        },
        {
          id: 16,
          rate: 5.0,
          add: 0.1,
          name: "C计划064512543(售罄)",
          days: 120,
          percent: 100
        },
        {
          id: 17,
          rate: 6.0,
          add: 0.1,
          name: "C计划064512546(售罄)",
          days: 10,
          percent: 100
        },
        {
          id: 18,
          rate: 5.0,
          add: 0.1,
          name: "C计划064512543(售罄)",
          days: 120,
          percent: 100
        }
      ]
    };
  },
  computed: {
    getProductList() {
      let newList = this.allProducts.slice(0);
      return index => {
        if (index == 0) {
          return this.allProducts;
        } else if (index == 1) {
          return newList.sort((a, b) => {
            return a.rate - b.rate;
          });
        } else if (index == 2) {
          return newList.sort((a, b) => {
            return a.days - b.days;
          });
        }
      };
    }
  },
  methods: {
    onProductClick(item) {
      this._routePushQ("ProductDetail", { id: item.id });
    },
    onTabChange() {}
  }
};
</script>


<style lang="less" scoped>
.my-tab {
  margin-top: 46px;
  padding-top: 5px;
}

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
</style>
