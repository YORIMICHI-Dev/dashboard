export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/') {
        return navigateTo('/dashboard/profile', {redirectCode: 301})
    }
})