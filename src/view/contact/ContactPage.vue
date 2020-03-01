<template>
  <div>
    <van-nav-bar title="专属客服" left-arrow @click-left="onClickLeft" />
    <van-divider />

    <div class="my-content">专属客服是 IE Finance 为客户提供的1对1 VIP 服务</div>

    <van-divider />

    <van-row type="flex" justify="center">
      <van-col>
        <van-image
          round
          width="10rem"
          height="10rem"
          src="static/img/mine/contact.jpg"
          fit="cover"
        />
      </van-col>
    </van-row>

    <van-divider />

    <van-button type="primary" block url="tel:099750883">立即拨打电话(09 975 0883)</van-button>
  </div>
</template>

<script>
export default {
  name: 'contact-page',
  data() {
    return {}
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.my-content {
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 600;
}
</style>
