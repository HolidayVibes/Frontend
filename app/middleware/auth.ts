export default defineNuxtRouteMiddleware(() => {
  const userStore = useUserStore();

  if (userStore.isUserLoading) return;
  if (userStore.isUserAuthorised) return;

  return navigateTo({
    path: "/",
    query: { modal: "login" },
  });
});
