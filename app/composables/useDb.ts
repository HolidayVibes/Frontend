export const useDB = async () => {
  const nuxtApp = useNuxtApp();
  return await nuxtApp.$db;
};
