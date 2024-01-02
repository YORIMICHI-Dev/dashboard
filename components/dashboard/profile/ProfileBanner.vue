<script setup lang="ts">
import profileBg from '/images/profile/profile-card.png';
import UserImage from '/images/profile/user-7.jpg';
</script>

<template>
  <VCard elevation="10" class="overflow-hidden">
    <img :src="profileBg" alt="profile" class="w-100" />
    <div class="mb-4">
      <VRow class="mt-1">
        <!-- About -->
        <VCol cols="12" lg="4" sm="12" class="order-sm-second">
          <div class="px-4 py-1">
            <VRow class="justify-center">
              <VCol cols="4" class="text-center">
                <TieIcon size="32" />
                <h4 class="text-h4">3 Years</h4>
                <h6 class="text-h6 font-weight-regular">Backend</h6>
              </VCol>
              <v-col cols="4" class="text-center">
                <BrandPythonIcon size="32" />
                <h4 class="text-h4">Python</h4>
                <h6 class="text-h6 font-weight-regular">Main skill</h6>
              </v-col>
              <v-col cols="4" class="text-center">
                <HeartIcon size="32" />
                <h4 class="text-h4">2 years</h4>
                <h6 class="text-h6 font-weight-regular">Married</h6>
              </v-col>
            </VRow>
          </div>
        </VCol>

        <!-- Avator -->
        <VCol
          cols="12"
          lg="4"
          sm="12"
          class="d-flex justify-center order-sml-first"
        >
          <div class="text-center top-spacer">
            <div class="avatar-border">
              <VAvatar size="100" class="userImage">
                <img :src="UserImage" width="100" alt="Mathew" />
              </VAvatar>
            </div>
            <h5 class="text-h5 mt-3">Kusuda Daisuke</h5>
            <span class="text-h6 font-weight-regular">Engineer</span>
          </div>
        </VCol>

        <!-- External site -->
        <VCol
          cols="12"
          lg="4"
          class="d-flex align-center justify-center justify-lg-end order-sm-third"
        >
          <div
            class="d-flex align-center justify-space-between px-10 py-1 gap-3"
          >
            <VBtn
              href="https://github.com/YORIMICHI-Dev"
              icon
              variant="flat"
              size="small"
              class="btn-brand-github"
            >
              <BrandGithubIcon size="20" />
            </VBtn>
          </div>
        </VCol>
      </VRow>
    </div>
  </VCard>
</template>

<style lang="scss">
.avatar-border {
  background-image: linear-gradient(rgb(80, 178, 252), rgb(244, 76, 102));
  border-radius: 50%;
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  .userImage {
    border: 4px solid rgb(255, 255, 255);
  }
}

.top-spacer {
  margin-top: -95px;
}

.profiletab .v-slide-group__content {
  justify-content: end;
  .v-btn--variant-text .v-btn__overlay {
    background: transparent;
  }
}

@media (max-width: 1023px) {
  .order-sm-second {
    order: 2;
  }
  .order-sml-first {
    order: 1;
  }
  .order-sm-third {
    order: 3;
  }
  .order-sm-last {
    order: 4;
  }
}

.btn-brand-github {
  background-color: rgb(6, 6, 6) !important;
  color: rgb(var(--v-theme-surface));
}
</style>
