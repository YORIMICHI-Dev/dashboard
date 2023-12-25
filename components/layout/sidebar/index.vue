<script setup lang="ts">
import sidebarItem from "@/components/layout/sidebar/sidebarItem"
const sidebarMenu = shallowRef(sidebarItem)
const customizer = useCustomizerStore()
</script>

<template>
    <VNavigationDrawer
        left
        v-model="customizer.Sidebar_drawer"
        width="270"
        elevation="0"
        rail-width="75"
        class="leftSidebar"
        :rail="customizer.mini_sidebar"
        expand-on-hover
        app
    >

    <!-- Logo -->
     <div class="ps-5">
        <Logo />
     </div>
    <!-- Logo  -->

    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar">
        <VList class="pa-6" density="compact">
            <template v-for="item in sidebarMenu">
                <!-- Item Sub Header -->
                <LayoutSidebarNavGroup
                    :item="item"
                    v-if="item.header"
                    :key="item.title"
                />

                <!-- If Has Child -->
                <LayoutSidebarNavCollapse
                    class="leftPadding"
                    :item="item"
                    :level="0"
                    v-else-if="item.children"
                />

                <!-- Single Item -->
                <LayoutSidebarNavItem
                    :item="item"
                    :level="0"
                    v-else
                    class="leftPadding"
                />
            </template>
        </VList>
    </perfect-scrollbar>
    </VNavigationDrawer>
</template>
