export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/') {
    return navigateTo('/dashboard/profile', { redirectCode: 301 });
  }
});
