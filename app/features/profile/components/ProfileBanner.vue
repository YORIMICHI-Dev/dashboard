<script setup lang="ts">
import SharedIcon from '~/features/@shared/components/Icon/Icon.vue';
import profileBg from '/images/profile/profile-card.png';
import UserImage from '/images/profile/user-7.jpg';

const skills = [
  { icon: 'tie', color: 'text-primary', label: 'Full Stack', years: '3 years' },
  { icon: 'brand-nuxt', color: 'text-success', label: 'Frontend', years: '2 years' },
  { icon: 'brand-c-sharp', color: 'text-teal-600', label: 'Backend', years: '2 years' },
  { icon: 'brand-python', color: 'text-purple-500', label: 'Backend', years: '3 years' },
];

const externals = [
  { icon: 'brand-github', color: 'text-black dark:text-white', label: 'Github', years: '3 years' },
  { icon: 'heart', color: 'text-pink-400', label: 'Married', years: '2 years' },
];
</script>

<template>
  <UCard class="overflow-hidden" :ui="{ body: 'p-0 sm:p-0' }">
    <img :src="profileBg" alt="profile" class="w-full" />
    <div class="mb-4">
      <div class="grid grid-cols-12 gap-6 mt-1">
        <!-- Skills -->
        <div class="col-span-12 lg:col-span-5 order-sm-second">
          <div class="px-4 py-1">
            <div class="grid grid-cols-12 gap-6 justify-center">
              <div v-for="s in skills" :key="s.label" class="col-span-3 text-center">
                <SharedIcon :name="s.icon" :class="s.color" class="size-8 mx-auto" />
                <h4 class="text-base font-semibold" :class="s.color">{{ s.label }}</h4>
                <h6 class="text-base font-normal" :class="s.color">{{ s.years }}</h6>
              </div>
            </div>
          </div>
        </div>

        <!-- Avatar -->
        <div class="col-span-12 lg:col-span-2 flex justify-center order-sml-first">
          <div class="text-center top-spacer">
            <div class="avatar-border">
              <img :src="UserImage" width="100" alt="Kusuda Daisuke" class="userImage rounded-full" />
            </div>
            <h5 class="text-lg font-semibold mt-3">Kusuda Daisuke</h5>
            <span class="text-base font-normal">Engineer</span>
          </div>
        </div>

        <!-- External -->
        <div class="col-span-12 lg:col-span-5 order-sm-second">
          <div class="px-4 py-1">
            <div class="grid grid-cols-12 gap-6 justify-center">
              <div v-for="e in externals" :key="e.label" class="col-span-3 text-center">
                <SharedIcon :name="e.icon" :class="e.color" class="size-8 mx-auto" />
                <h4 class="text-base font-semibold" :class="e.color">{{ e.label }}</h4>
                <h6 class="text-base font-normal" :class="e.color">{{ e.years }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>

<style scoped>
.avatar-border {
  background-image: linear-gradient(rgb(80, 178, 252), rgb(244, 76, 102));
  border-radius: 50%;
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.userImage {
  border: 4px solid #fff;
}
.top-spacer {
  margin-top: -95px;
}
@media (max-width: 1023px) {
  .order-sm-second {
    order: 2;
  }
  .order-sml-first {
    order: 1;
  }
}
</style>
