<script setup lang="ts">
const customizer = useCustomizerStore();

// themes color options
const themeColors = ref([
  {
    name: 'BLUE_THEME',
    bg: 'themeBlue',
  },
  {
    name: 'AQUA_THEME',
    bg: 'themeAqua',
  },
  {
    name: 'PURPLE_THEME',
    bg: 'themePurple',
  },
  {
    name: 'GREEN_THEME',
    bg: 'themeGreen',
  },
  {
    name: 'CYAN_THEME',
    bg: 'themeCyan',
  },
  {
    name: 'ORANGE_THEME',
    bg: 'themeOrange',
  },
]);

// Dark Theme Colors
const DarkthemeColors = ref([
  { name: 'DARK_BLUE_THEME', bg: 'themeDarkBlue' },
  { name: 'DARK_AQUA_THEME', bg: 'themeDarkAqua' },
  { name: 'DARK_PURPLE_THEME', bg: 'themeDarkPurple' },
  { name: 'DARK_GREEN_THEME', bg: 'themeDarkGreen' },
  { name: 'DARK_CYAN_THEME', bg: 'themeDarkCyan' },
  { name: 'DARK_ORANGE_THEME', bg: 'themeDarkOrange' },
]);
</script>

<!------------------------------------->
<!-- Customizer -->
<!------------------------------------->
<template>
  <div class="pa-6">
    <h5 class="text-h5">Settings</h5>
  </div>
  <v-divider></v-divider>
  <perfect-scrollbar style="height: calc(100vh - 90px)">
    <div class="pa-6">
      <h6 class="text-h6 mt-8 mb-5">Theme Color</h6>
      <v-item-group mandatory v-model="customizer.actTheme" class="ml-n2 v-row">
        <v-col
          cols="4"
          v-for="theme in themeColors"
          :key="theme.name"
          class="pa-2"
        >
          <v-item v-slot="{ isSelected, toggle }" :value="theme.name">
            <v-sheet
              rounded="md"
              class="border-sm border-primary cursor-pointer d-block text-center px-5 py-4 hover-btns"
              elevation="9"
              @click="toggle"
            >
              <v-avatar :class="theme.bg" size="25">
                <CheckIcon color="white" size="18" v-if="isSelected" />
              </v-avatar>
            </v-sheet>
          </v-item>
        </v-col>
      </v-item-group>
      <h6 class="text-h6 mt-11 mb-5">Theme Dark Color</h6>
      <v-item-group mandatory v-model="customizer.actTheme" class="ml-n2 v-row">
        <v-col
          cols="4"
          v-for="theme in DarkthemeColors"
          :key="theme.name"
          class="pa-2"
        >
          <v-item v-slot="{ isSelected, toggle }" :value="theme.name">
            <v-sheet
              rounded="md"
              class="border-sm border-primary cursor-pointer d-block text-center px-5 py-4 hover-btns"
              elevation="9"
              @click="toggle"
            >
              <v-avatar :class="theme.bg" size="25">
                <CheckIcon color="white" size="18" v-if="isSelected" />
              </v-avatar>
            </v-sheet>
          </v-item>
        </v-col>
      </v-item-group>
    </div>
  </perfect-scrollbar>
</template>
