<script setup lang="ts">
import SharedIcon from '~/features/@shared/components/Icon/Icon.vue';
</script>

<template>
  <UPopover :content="{ align: 'end' }">
    <button type="button" class="kd-avatar font-display">KD</button>

    <template #content>
      <div class="w-[320px]">
        <div class="px-6 py-6">
          <h5 class="text-xl font-semibold text-primary">Profile</h5>
          <div class="flex items-center mt-4">
            <UAvatar src="/images/profile/avatar-face.jpg" alt="profile" size="xl" />
            <div class="ml-3">
              <h6 class="text-base font-semibold">Kusuda Daisuke</h6>
              <span class="text-sm text-muted">Engineer</span>
              <div class="flex items-center mt-1">
                <SharedIcon name="mail" class="size-4" />
                <span class="text-sm text-muted ml-2">yorimichi.dev@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UPopover>
</template>

<style scoped>
.kd-avatar {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: #111113;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
}
</style>
