<script setup lang="ts"></script>

<template>
  <div class="ExtraBox rounded-xl bg-secondary/10 px-4 py-3">
    <div class="flex items-center hide-menu">
      <UAvatar src="/images/profile/user-7.jpg" alt="user" size="lg" />
      <div class="ml-4">
        <h6 class="-mb-1 text-base font-semibold text-highlighted">Daisuke</h6>
        <span class="text-sm text-muted">Engineer</span>
      </div>
      <div class="ml-auto">
        <UTooltip text="Profile">
          <UButton
            to="/profile"
            icon="i-tabler-power"
            color="primary"
            variant="ghost"
            square
          />
        </UTooltip>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ExtraBox {
  position: relative;
  overflow: hidden;
}
</style>
