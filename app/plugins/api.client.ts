export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    credentials: "include",
    onResponseError: async ({ response, request, options }) => {
      if (response.status !== 401) return;

      try {
        await $fetch("/backend/api/v1/auth/refresh", {
          method: "POST",
          credentials: "include",
        });
        /* eslint-disable @typescript-eslint/no-explicit-any */
        return await $fetch(request as string, options as any);
      } catch {
        // Refresh не удался — разлогиниваем
        const userStore = useUserStore();
        userStore.user = null;
        userStore.isUserAuthorised = false;
        await navigateTo("/?modal=login");
      }
    },
  });

  return {
    provide: { api },
  };
});
