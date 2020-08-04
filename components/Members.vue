<template>
  <div class="page-work__members-wrapper">
    <div class="page-work__members-container">
      <img
        class="page-work__member"
        src="~/assets/images/member_h.png"
        alt="Member Hungmi"
      />
      <img
        class="page-work__member member--k"
        src="~/assets/images/member_k_serving.png"
        alt="Member Kevin"
      />
      <img
        class="page-work__member"
        src="~/assets/images/member_p.png"
        alt="Member Polun"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.page-work__members-wrapper {
  margin: 0px;
  padding-top: 53px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .page-work__members-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-end;
    min-width: 570px;
  }
  .page-work__member {
    width: 180px;
    height: 180px;
    margin: 0px -5px -10px -5px;
  }
  .member--k {
    width: 210px;
    height: 210px;
    margin: 0px -18px -5px -22px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 86px;
  }
  @media screen and (max-width: 414px) {
    padding-top: 39px;
  }
}
</style>
