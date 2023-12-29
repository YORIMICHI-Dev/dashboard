export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/') {
        return navigateTo('/dashboard/profile', {redirectCode: 301})
    }

    // For vercel
    if (to.path === '/dashboard-daisuke.vercel.app') {
        return navigateTo('/dashboard-daisuke.vercel.app/dashboard/profile', {redirectCode: 301})
    }
})