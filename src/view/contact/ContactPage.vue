<template>
  <div>
    <van-nav-bar :title="$t('customer_service')" left-arrow @click-left="onClickLeft" />
    <van-panel title="IE Finance 为客户提供1对1 VIP 服务" icon="gem-o">
      <div style="padding: 20px 0;">
        <van-row type="flex" justify="center">
          <van-col>
            <van-image
              round
              width="10rem"
              height="10rem"
              :src="this.contact"
              fit="cover"
            />
          </van-col>
        </van-row>
        <div style="margin-top: 10px; text-align: center; color: #f44;">您的专属客服 Mia</div>
      </div>
      <div slot="footer">
        <van-button type="primary" block url="tel:099750883" style="font-size: 14px; font-weight: bold;">
          <van-icon name="service-o" style="font-size: 16px !important; font-weight: bold; vertical-align: middle;" />
          <span>立即拨打电话(09 975 0883)</span>
        </van-button>
      </div>
    </van-panel>
    <div style="margin-top: 10px;">
      <van-cell-group>
        <van-cell title="其他联系方式" />
        <van-cell title="公司地址" icon="location-o" value="Level 13, Tower 1, 205 Queen Street, Auckland" />
        <van-cell title="电子邮箱" icon="envelop-o" value="info@iefinance.co.nz" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact-page',
  data() {
    return {
      contact: require("@/assets/img/mine/contact.jpg")
    }
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

.van-panel__header {
  padding: 15px;
  font-size: 16px;
  // font-weight: bold;
}

.van-cell__left-icon {
  // font-weight: bold;
  font-size: 18px;
}
</style>
