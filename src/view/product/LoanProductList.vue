<template>
  <div>loan</div>
</template>


<script>
export default {
  name: "loan-product-list",
  data() {
    return {
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
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>
